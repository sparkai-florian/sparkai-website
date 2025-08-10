// components/home/Problem.js

export default function Problem() {
  const problems = [
    'You reply too late to Instagram or WhatsApp messages.',
    'Clients ask the same questions — over and over again.',
    'You lose potential leads when you’re offline or busy.',
    'You waste time handling bookings and repeating details.',
    'You know AI could help — but don’t know where to start.',
  ];

  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Does this sound familiar?
        </h2>
        <ul className="space-y-4 text-lg text-gray-300">
          {problems.map((problem, index) => (
            <li key={index} className="bg-zinc-900 p-4 rounded-md shadow-md">
              {problem}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
