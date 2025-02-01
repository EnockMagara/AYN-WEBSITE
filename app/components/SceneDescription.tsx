export default function SceneDescription({ description }) {
  return (
    <div className="mt-4 p-4 bg-gray-100 rounded">
      <h2 className="text-xl font-semibold mb-2">Scene Description:</h2>
      <p>{description || "No description available"}</p>
    </div>
  )
}

