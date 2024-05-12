# TODO: MAKE IT RUN

# use the official Bun image
# see all versions at https://hub.docker.com/r/oven/bun/tags
FROM oven/bun:1 as base
WORKDIR /app

# install dependencies into temp directory
# this will cache them and speed up future builds
FROM base AS install
RUN mkdir -p /temp/dev
COPY package.json bun.lockb /temp/dev/
RUN cd /temp/dev && bun install --frozen-lockfile

# install with --production (exclude devDependencies)
RUN mkdir -p /temp/prod
COPY package.json bun.lockb /temp/prod/
RUN cd /temp/prod && bun install --frozen-lockfile --production

# copy node_modules from temp directory
# then copy all (non-ignored) project files into the image
FROM base AS prerelease
COPY --from=install /temp/dev/node_modules node_modules
COPY . .

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED 1
ENV NEXT_PUBLIC_CONVEX_URL "https://incredible-wombat-732.convex.cloud"
# RUN bun run test #todo: add here after adding tests
RUN bun run build

# copy production dependencies and source code into final image
FROM base AS release
COPY --from=install /temp/prod/node_modules node_modules
COPY --from=prerelease /app/.next/ .
COPY --from=prerelease /app/public/ ./public/
COPY --from=prerelease /app/package.json .

# Set correct permissions for nextjs user and don't run as root
RUN adduser crm
RUN chown crm:bun .

# run the app
USER crm
EXPOSE 3000/tcp
CMD ["bun", "start" ]