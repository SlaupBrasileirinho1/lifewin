
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

interface Activity {
  name: string;
  progress: number[];
}

interface ProgressTrackerProps {
  activity: Activity;
}

const ProgressTracker = ({ activity }: ProgressTrackerProps) => {
  const data = activity.progress.map((value, index) => ({
    day: `Dia ${index + 1}`,
    valor: value,
  }));

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
      <h3 className="text-lg font-semibold mb-4">{activity.name}</h3>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="valor" stroke="#8884d8" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ProgressTracker;
