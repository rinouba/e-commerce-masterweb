const ColorCircles = ({ colorOneCircle, colorTwoCircle}) => {
  return (
    <div className="flex items-center gap-2">
      <div
        className="w-6 h-6 rounded-full flex items-center justify-center border-2"
        style={{ borderColor: "black" }}
      >
        <div
          className="w-4 h-4 rounded-full"
          style={{ backgroundColor: colorOneCircle }}
        ></div>
      </div>
      <div
        className="w-6 h-6 rounded-full"
        style={{ backgroundColor: colorTwoCircle, opacity: 0.7 }}
      ></div>
    </div>
  );
};

export default ColorCircles;
