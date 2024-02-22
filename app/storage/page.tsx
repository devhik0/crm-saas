import { authorize, listFiles } from "./listFiles";

type File = { kind: "drive#file" | undefined; size: string; id: string; name: string; modifiedTime: string };

export default async function Storage() {
  const files = (await authorize().then(listFiles).catch(console.error)) as File[];

  console.log("Files: ", files);

  return (
    <div>
      Here is your files from your Google Drive
      {files &&
        files.map((file) => (
          <div className="my-2 flex justify-between gap-2 bg-gray-700 p-2" key={file.id}>
            <span className="rounded-sm bg-blue-600 p-1 text-sm text-gray-200">File</span>
            <p>{file.name}</p>
            <p>{file.modifiedTime.slice(0, 10)}</p>
            <p>{Number(file.size) > 1000 ? `${Math.round(Number(file.size) / 1000)}kB` : `${file.size}B`}</p>
          </div>
        ))}
    </div>
  );
}
