interface statusFlagProps {
  status: "Alive" | "Dead" | "unknown"
}

export default function StatusFlag ({ status }:statusFlagProps) {
  return (
    <div className="absolute top-5 right-5">
      <span className="text-white">{status}</span>
    </div>
  )
}