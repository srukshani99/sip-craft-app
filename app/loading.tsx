
const loading = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-20 backdrop-blur-md">
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
      </div>
    </div>
  )
}

export default loading;