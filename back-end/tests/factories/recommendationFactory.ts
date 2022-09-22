import {faker} from '@faker-js/faker';

export async function recommendationFactory(){
    const recommendation = {
        name: faker.lorem.words(10),
        youtubeLink: "https://www.youtube.com/watch?v=chwyjJbcs1Y"
    }

    return recommendation;
}

