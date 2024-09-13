const DesktopHero = () => {
  return (
    <div>
      <div className="grid container grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 mb-8">
        <div className="col-span-1 md:col-span-2 lg:col-span-2 row-span-2">
          <img
            src="https://a0.muscache.com/im/pictures/e775cff4-3517-4e9d-9024-809ae8dd2db7.jpg?im_w=1200"
            alt="A-frame cottage"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="col-span-1">
          <img
            src="https://a0.muscache.com/im/pictures/miso/Hosting-18685311/original/6178d75c-c0a2-4fe7-b3a5-9f8e83e7db40.jpeg?im_w=720"
            alt="Image"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="col-span-1">
          <img
            src="https://a0.muscache.com/im/pictures/ebcec940-a09f-4c7d-83aa-45523e594e3e.jpg?im_w=720"
            alt="Image"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="col-span-1">
          <img
            src="https://a0.muscache.com/im/pictures/miso/Hosting-18685311/original/7b25f632-680c-46ef-9305-ecfe21998b2d.jpeg?im_w=720"
            alt="Image"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="col-span-1">
          <img
            src="https://a0.muscache.com/im/pictures/e8613283-293e-4d3e-9049-dcb15def6525.jpg?im_w=720"
            alt="Image"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default DesktopHero;
