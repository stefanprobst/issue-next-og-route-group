import { ImageResponse } from "next/og";

export const runtime = "edge";

export default async function OpenGraphImage(): Promise<ImageResponse> {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 32,
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
          padding: 16,
          backgroundColor: "#fff",
        }}
      >
				Hello, world!
			</div>
    )
  );
}
