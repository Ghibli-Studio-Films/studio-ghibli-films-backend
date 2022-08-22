import { DataSource } from "typeorm";
import { AppDataSource } from "../../../data-source";
import { listFilmsService } from "../../../services";
import { useRepo } from "../../../hooks";
import { filmsData } from "../../fixtures";
import { Film } from "../../../models";

describe("Unitary List Film Service on Success", () => {
  let connection: DataSource;

  let data: Film[];

  beforeAll(async () => {
    connection = await AppDataSource.initialize();

    const { films } = useRepo();

    const filmsArray = filmsData as Film[];

    data = filmsArray.map(
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
      }) => {
        const film = new Film();

        film.title = title;
        film.original_title = original_title;
        film.image = image;
        film.movie_banner = movie_banner;
        film.description = description;
        film.director = director;
        film.producer = producer;
        film.release_date = release_date;
        film.running_time = running_time;
        film.rt_score = rt_score;

        return film;
      }
    );

    await films.save(data);
  });

  afterAll(async () => {
    await connection.destroy();

    jest.resetAllMocks();
  });

  it("should be able to list films from Film repository", async () => {
    const service = await listFilmsService();

    const treatedData = data.map(({ created_at, updated_at, ...rest }) => ({
      ...rest,
    }));

    expect(service).toHaveProperty("forEach");
    expect(service).toHaveLength(data.length);
    expect(service).toEqual(expect.arrayContaining(treatedData));
  });
});
