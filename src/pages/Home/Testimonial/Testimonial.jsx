import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

const Testimonial = () => {
  const testimonialInfo = [
    {
      id: 1,
      name: "Mahin Khan",
      position: "CEO Of iFin, Financial Corp.",
      img: "https://media.istockphoto.com/id/1244527145/photo/happy-smiling-woman-working-in-call-center.jpg?s=612x612&w=0&k=20&c=3q7ImqhEDOdYptyaZLYmjqtJgMBoY42lGDkzUi0NGBo=",
      review:
        "Nam tempus turpis at metus scelerisque placerat nulla deumantos sollicitudin felis. Pellentesque diam elementum an lobortis at, mollis duto an risus. Sedcuman des faucibus sullamcorper mattis fusce de molestie elit a lorem tempus delo scelerisque blandit est cursus nam mattis et lectus blandit pharetra.",
    },
    {
      id: 2,
      name: "Mahin Khan",
      position: "CEO Of iFin, Financial Corp.",
      img: "https://media.istockphoto.com/id/1244527145/photo/happy-smiling-woman-working-in-call-center.jpg?s=612x612&w=0&k=20&c=3q7ImqhEDOdYptyaZLYmjqtJgMBoY42lGDkzUi0NGBo=",
      review:
        "Nam tempus turpis at metus scelerisque placerat nulla deumantos sollicitudin felis. Pellentesque diam elementum an lobortis at, mollis duto an risus. Sedcuman des faucibus sullamcorper mattis fusce de molestie elit a lorem tempus delo scelerisque blandit est cursus nam mattis et lectus blandit pharetra.",
    },
    {
      id: 3,
      name: "Mahin Khan",
      position: "CEO Of iFin, Financial Corp.",
      img: "https://media.istockphoto.com/id/1244527145/photo/happy-smiling-woman-working-in-call-center.jpg?s=612x612&w=0&k=20&c=3q7ImqhEDOdYptyaZLYmjqtJgMBoY42lGDkzUi0NGBo=",
      review:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country.",
    },
    {
      id: 4,
      name: "Mahin Khan",
      position: "CEO Of iFin, Financial Corp.",
      img: "https://media.istockphoto.com/id/1244527145/photo/happy-smiling-woman-working-in-call-center.jpg?s=612x612&w=0&k=20&c=3q7ImqhEDOdYptyaZLYmjqtJgMBoY42lGDkzUi0NGBo=",
      review:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country.",
    },
    {
      id: 5,
      name: "Mahin Khan",
      position: "CEO Of iFin, Financial Corp.",
      img: "https://media.istockphoto.com/id/1244527145/photo/happy-smiling-woman-working-in-call-center.jpg?s=612x612&w=0&k=20&c=3q7ImqhEDOdYptyaZLYmjqtJgMBoY42lGDkzUi0NGBo=",
      review:
        "Nam tempus turpis at metus scelerisque placerat nulla deumantos sollicitudin felis. Pellentesque diam elementum an lobortis at, mollis duto an risus. Sedcuman des faucibus sullamcorper mattis fusce de molestie elit a lorem tempus delo scelerisque blandit est cursus nam mattis et lectus blandit pharetra.",
    },
  ];

  return (
    <div>
      <div className="text-center">
        <div className="">
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-400">
            Testimonial
          </p>
        </div>
        <h2 className="text-3xl font-bold uppercase lg:pb-8 pb-3">
          Customer Review
        </h2>
      </div>

      <div className="py-10">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <>
            {testimonialInfo.map((info) => (
              <SwiperSlide key={info.id}>
                <div className="lg:px-44 px-10">
                  <div>
                    <div className="flex items-center justify-center gap-6">
                      <div>
                        <img
                          src={info.img}
                          className="w-20 h-20 rounded-full object-cover"
                          alt=""
                        />
                      </div>
                      <div>
                        <h3 className="font-bold text-xl">{info.name}</h3>
                        <p>{info.position}</p>
                      </div>
                    </div>
                    <div className="text-center py-6">
                      <p className="lg:text-base text-sm">{info.review}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </>
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
