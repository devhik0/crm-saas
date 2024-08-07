# use the official Bun image
# see all versions at https://hub.docker.com/r/oven/bun/tags
FROM oven/bun:1 AS base
WORKDIR /app

# install dependencies into temp directory
# this will cache them and speed up future builds
FROM base AS install
RUN mkdir -p /temp/dev
COPY package.json bun.lockb /temp/dev/
RUN cd /temp/dev && bun install

# install with --production (exclude devDependencies)
RUN mkdir -p /temp/prod
COPY package.json bun.lockb /temp/prod/
RUN cd /temp/prod && bun install --production

# copy node_modules from temp directory
# then copy all (non-ignored) project files into the image
FROM base AS prerelease
COPY --from=install /temp/dev/node_modules node_modules
COPY . .

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV NEXT_PUBLIC_SUPABASE_URL=https://jokkvunyzexyiwypinjd.supabase.co
ENV NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impva2t2dW55emV4eWl3eXBpbmpkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTYzODIyNzEsImV4cCI6MjAzMTk1ODI3MX0.O-_1nkM2Blhm7kjscCL9bC0BIp_yhLeKGVoFKDdo_bw

RUN bun run build

# copy production dependencies and source code into final image
FROM base AS release
WORKDIR /app

# Set correct permissions for nextjs user and don't run as root
RUN adduser crm
RUN chown crm:bun .
USER crm

COPY --from=install /temp/prod/node_modules node_modules
COPY --from=prerelease --chown=crm:bun /app/.next ./.next
COPY --from=prerelease /app/node_modules ./node_modules
COPY --from=prerelease /app/package.json ./package.json
COPY --from=prerelease /app/public ./public
# CMD ["bun", "run", "build"]
# run the app
EXPOSE 3000/tcp
CMD ["bun", "start" ]