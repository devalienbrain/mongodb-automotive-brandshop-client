import user1 from "/Resources/user1.jpeg";
import user2 from "/Resources/user2.avif";

const UserReviews = () => {
  return (
    <div className="text-center py-7">
      <h3 className="text-3xl font-black">USER REVIEWS: MEET OUR CLIENTS</h3>

      <div className=" flex flex-col md:flex-row gap-7 justify-center p-5 drop-shadow">
        <div className="border border-green-100 rounded-lg p-5 hover:bg-green-950 hover:border-none hover:text-white drop-shadow-2xl">
          <div className="flex flex-col lg:flex-row gap-5">
            <div className="flex-1">
              <img className="w-full rounded-full" src={user1} />
            </div>
            <div className="text-left flex-1">
              <p className="text-lg font-bold mb-3">Dr. Aparajita Elsa</p>
              <p>Associate Professor, DMCH</p>
              <p>
                <small>Date visited: 09 Sep, 2023</small>
              </p>
              <p className="mt-2 text-xs italic">
                <small>
                  "I recently purchased the BMW car seat cover for my vehicle,
                  and I must say, it has exceeded my expectations. The
                  installation was a breeze; it took me less than 20 minutes to
                  fit it on both the front seats. The material feels durable,
                  and I appreciate the added protection it offers to my original
                  seats, preventing wear and tear. One of the standout features
                  for me is the universal fit. I drive a mid-sized sedan, and
                  these seat covers fit like a glove, making it look like a
                  custom job. The design is sleek and stylish, enhancing the
                  interior of my car. Plus, the color options available are a
                  nice touch, allowing me to match it with the overall look of
                  my vehicle. The seat covers are comfortable to sit on, and
                  they dont make me feel sweaty, even during long drives in the
                  summer heat. Cleaning them is also straightforward – a quick
                  wipe or gentle machine wash does the job. The only reason Im
                  not giving it a perfect 5-star rating is the price. While the
                  quality and features are great, I found them to be a bit on
                  the higher side compared to some other options on the market.
                  Nonetheless, the extra cost seems justified for the overall
                  value Im getting from these seat covers. In summary, the XYZ
                  car seat cover is a worthwhile investment for anyone looking
                  to protect their car seats and enhance their vehicles
                  interior. Its stylish, comfortable, and easy to install. If
                  the price isnt a concern, its a fantastic choice."
                </small>
              </p>
            </div>
          </div>
        </div>
        <div className="border border-green-100 rounded-lg p-5 hover:bg-green-950 hover:border-none hover:text-white drop-shadow-2xl">
          <div className="flex flex-col lg:flex-row gap-5">
            <div className="flex-1">
              <img className="w-full rounded-full" src={user2} />
            </div>
            <div className="text-left flex-1">
              <p className="text-lg font-bold mb-3">Akash Brown</p>
              <p>Software Engineer, Yoggle</p>
              <p>
                <small>Date visited: 25 Sep, 2023</small>
              </p>
              <p className="mt-2 text-xs">
                <small>
                  "I recently replaced my old tires with the roadstar All-Season
                  Tires, and I couldnt be happier with the results. These tires
                  have completely transformed the way my car handles in various
                  weather conditions. Living in a region with unpredictable
                  weather, I needed tires that could perform well in rain, snow,
                  and even on dry roads. The ABC All-Season Tires have met and
                  exceeded my expectations. They provide exceptional traction
                  and stability, giving me confidence while driving, no matter
                  the weather. What I love about these tires is their
                  durability. Ive put them to the test on both long highway
                  drives and rough country roads, and theyve held up admirably.
                  Ive noticed a significant improvement in fuel efficiency as
                  well, which is a nice bonus. These tires are also surprisingly
                  quiet. Road noise used to be a constant companion on my daily
                  commute, but the ABC All-Season Tires have significantly
                  reduced it. I can now enjoy a quieter and more comfortable
                  ride. The price may be slightly higher than some other
                  all-season tire options, but the performance and safety they
                  provide make them worth every penny. I see them as an
                  investment in my safety and the longevity of my vehicle. In
                  conclusion, the roadstar All-Season Tires are a game-changer
                  for me. They deliver on their promises of all-season
                  performance, durability, and comfort. If youre looking for
                  tires that will keep you safe and provide a smooth ride, I
                  highly recommend giving these a try."
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserReviews;
