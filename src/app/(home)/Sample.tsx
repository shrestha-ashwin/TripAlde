import SampleCard from "./SampleCard";

export default function Sample() {
  return (
    <section className="mb-24">
      <h2 className="text-center font-semibold text-xl mb-8">
        Browse these sample itineraries
      </h2>
      <div className="grid sampleGrid items-center justify-items-center">
        <SampleCard src="" text="5 Days in Rome" />
        <SampleCard src="" text="3 Days in New York" />
      </div>
    </section>
  );
}
