export default function SampleCard({ src = "", text = "not found" }) {
  return (
    <div>
      <img src={src} />
      <p>{text}</p>
    </div>
  );
}
