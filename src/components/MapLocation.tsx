const MapLocation = () => {
  return (
    <div className="container mx-auto px-4 pb-8 py-8">
      <h2 className="text-2xl font-semibold">Where you'll be</h2>
      <p className="mt-2">Newport, Oregon, United States</p>

      {/* Google Map */}
      <div className="relative pt-[56.25%] mt-4">
        {" "}
        {/* 16:9 ratio */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53230.37175560751!2d-124.06824047486628!3d44.63678312116669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54c5cbb90f352ba7%3A0x8c4b91d6b8d53e8d!2sNewport%2C%20OR%2097358%2C%20USA!5e0!3m2!1sen!2s!4v1694726721091!5m2!1sen!2s"
          className="absolute inset-0 w-full h-full border-0 rounded-lg"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <p className="mt-4">
        We verified that this listing&apos;s location is accurate.{" "}
        <span className="font-medium underline">Learn more</span>
      </p>
    </div>
  );
};

export default MapLocation;
