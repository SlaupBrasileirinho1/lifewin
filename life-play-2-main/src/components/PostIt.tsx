
import { useState } from "react";
import { X, Edit2 } from "lucide-react";

interface PostItProps {
  initialContent: string;
  color: "yellow" | "pink" | "blue" | "green";
  onDelete: () => void;
}

const PostIt = ({ initialContent, color, onDelete }: PostItProps) => {
  const [content, setContent] = useState(initialContent);
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className={`bg-postit-${color} p-4 rounded-lg shadow-lg w-64 min-h-[200px] relative animate-float`}>
      <button
        onClick={onDelete}
        className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 transition-colors"
      >
        <X size={16} />
      </button>
      <button
        onClick={() => setIsEditing(true)}
        className="absolute top-2 right-8 text-gray-600 hover:text-gray-800 transition-colors"
      >
        <Edit2 size={16} />
      </button>
      {isEditing ? (
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          onBlur={() => setIsEditing(false)}
          className="w-full h-full bg-transparent border-none focus:outline-none resize-none"
          autoFocus
        />
      ) : (
        <p className="text-gray-800 whitespace-pre-wrap">{content}</p>
      )}
    </div>
  );
};

export default PostIt;
