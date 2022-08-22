import { ghibli } from "../../thirdparty";
import { Film } from "../../models";
import { useRepo } from "../../hooks";

export const getFilmsService = async () => {
  const { films } = useRepo();

  const res = await ghibli.get("/films?limit=50");

  const filmsArray: Film[] = res.data;

  const treatedFilmsArray = filmsArray.map(
    ({
      title,
      original_title,
      image,
      movie_banner,
      description,
      director,
      producer,
      release_date,
      running_time,
      rt_score,
    }) => ({
      title,
      original_title,
      image,
      movie_banner,
      description,
      director,
      producer,
      release_date,
      running_time,
      rt_score,
    })
  );

  await films.upsert(treatedFilmsArray, {
    conflictPaths: ["title"],
    skipUpdateIfNoValuesChanged: true,
  });
};
