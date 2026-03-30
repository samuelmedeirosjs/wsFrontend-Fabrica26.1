interface statusFlagProps {
  status: "Alive" | "Dead" | "unknown"
}

const translateAPIStatus = (status: string) => {
  switch (status) {
    case "Alive":
      return "Vivo";
    case "Dead":
      return "Morto";
    case "unknown":
      return "Desconhecido";
    case "Human":
      return "Humano";
    case "Alien":
      return "Alienígena";
    default:
      return status;
  }
};

export default function StatusFlag({ status }: statusFlagProps) {

  const bgFlag = {
    "Alive": "bg-green-500",
    "Dead": "bg-red-500",
    "unknown": "bg-gray-500"
  }

  return (
    <div className={`absolute top-0 right-0 ${bgFlag[status]} rounded-bl-2xl rounded-tr-2xl px-3 py-1 text-sm font-bold z-10`}>
      <span className="text-white">{translateAPIStatus(status)}</span>
    </div>
  )
}