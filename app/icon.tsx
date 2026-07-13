import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

// Wordmark itálico + o ponto coral do Fio — a mesma assinatura usada
// na Home, em miniatura, em vez de um monograma genérico.
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          background: "#334F40",
          borderRadius: 8,
          fontFamily: "serif",
          fontStyle: "italic",
          fontSize: 34,
          color: "#FEFEF2",
        }}
      >
        C
        <div
          style={{
            position: "absolute",
            width: 7,
            height: 7,
            borderRadius: 999,
            background: "#EC5238",
            right: 14,
            bottom: 15,
          }}
        />
      </div>
    ),
    size
  );
}
