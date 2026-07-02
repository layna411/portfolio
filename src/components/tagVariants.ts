export type TagVariant =
  | "three"
  | "websockets"
  | "react"
  | "redis"
  | "gray"
  | "html"
  | "css"
  | "javascript"
  | "node"
  | "next"
  | "kubernetes"
  | "postgresql"
  | "ogl"
  | "glsl"
  | "firebase"
  | "tailwind"
  | "android"
  | "java"
  | "bluetooth"
  | "arduino"
  | "python"
  | "opencv"
  | "iot"
  | "kotlin"
  | "flask"
  | "ble"
  | "esp32"
  | "rest";

export const tagLabels = {
  three: "Three.js",
  websockets: "WebSockets",
  react: "React",
  redis: "Redis",
  gray: "Gray",
  html: "HTML",
  css: "CSS",
  javascript: "JavaScript",
  node: "Node.js",
  next: "Next.js",
  kubernetes: "Kubernetes",
  postgresql: "PostgreSQL",
  ogl: "OGL.js",
  glsl: "GLSL",
  firebase: "Firebase",
  tailwind: "Tailwind CSS",
  android: "Android",
  java: "Java",
  bluetooth: "Bluetooth",
  arduino: "Arduino",
  python: "Python",
  opencv: "OpenCV",
  iot: "IoT",
  kotlin: "Kotlin",
  flask: "Flask",
  ble: "BLE",
  esp32: "ESP32",
  rest: "REST API",
} as const satisfies Record<TagVariant, string>;
