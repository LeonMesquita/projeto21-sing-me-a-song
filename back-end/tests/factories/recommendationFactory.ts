import {faker} from '@faker-js/faker';

export async function recommendationFactory(){
    const youtubeLink: string = `https://www.youtube.com/${faker.random.alphaNumeric(10)}`
    const recommendation = {
        name: faker.lorem.words(10),
        youtubeLink
    }

    return recommendation;
}

