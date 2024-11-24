const Calendar = ({ num }) => {
  const elements = new Array(num + 1).fill(0);

  const isPrime = (n) => {
    if (n <= 1) return false;

    for (let i = 2; i < n; i++) if (n % i == 0) return 
    false;

    return true;
  };

  return (
    <>
    <div className="flex flex-wrap gap-[1px]">
      {elements.map((val, index) => (
        <div
          key={index}
          className={` w-[4rem] h-[4rem] flex items-center justify-center text-white "
            ${
              isPrime(index)
                ? " bg-red-500"
                : index % 2 == 0
                ? "bg-green-500"
                : "bg-yellow-300"
            }`}
        >
          <p>{index}</p>
        </div>
      ))}
    </div>
    </>
  );
};
export default Calendar;
