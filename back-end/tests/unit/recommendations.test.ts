import { recommendationService } from "../../src/services/recommendationsService";
import {recommendationFactory} from '../factories/recommendationFactory';
import {recommendationRepository} from '../../src/repositories/recommendationRepository';


describe('Unit tests of post services', () => {
    it('The service must create a recommendation', async () => {

        const recommendation = await recommendationFactory();

        jest
            .spyOn(recommendationRepository, 'findByName')
            .mockImplementationOnce(() : any => {})

        jest
            .spyOn(recommendationRepository, 'create')
            .mockImplementationOnce(() : any => {});

        await recommendationService.insert(recommendation);
        expect(recommendationRepository.findByName).toBeCalled();
        expect(recommendationRepository.create).toBeCalled();
    });


    it('The service must throw an conflict error if the recommendation name is duplicated', async () => {

        const recommendation = await recommendationFactory();

        jest
            .spyOn(recommendationRepository, 'findByName')
            .mockImplementationOnce(() : any => {
                return recommendation;
            })

        const promise = recommendationService.insert(recommendation);
        expect(promise).rejects.toEqual({
            type: 'conflict',
            message: 'Recommendations names must be unique'
        })
    });

    it('The upvote service must insert a vote on the recommendation', async () => {

        const recommendation = await recommendationFactory();

        jest
            .spyOn(recommendationRepository, 'find')
            .mockImplementationOnce(() : any => {
                return recommendation;
            });
        
        jest
            .spyOn(recommendationRepository, 'updateScore')
            .mockImplementationOnce(() : any => {});

        await recommendationService.upvote(1);
        expect(recommendationRepository.find).toBeCalled();
        expect(recommendationRepository.updateScore).toBeCalled();
    });

    it('The upvote service must throw a not found error if the recommendation was not found', async () => {
        jest
            .spyOn(recommendationRepository, 'find')
            .mockImplementationOnce(() : any => {});

        const promise = recommendationService.upvote(1);
        expect(promise).rejects.toEqual({
            type: 'not_found',
            message: ''
        })
    });
    //
    //
    //
    it('The downvote service must remove a vote on the recommendation', async () => {

        const recommendation = await recommendationFactory();

        jest
            .spyOn(recommendationRepository, 'find')
            .mockImplementationOnce(() : any => {
                return recommendation;
            });
        
        jest
            .spyOn(recommendationRepository, 'updateScore')
            .mockImplementationOnce(() : any => {
                return {
                    ...recommendation,
                    score: 0
                }
            });

        await recommendationService.downvote(1);
        expect(recommendationRepository.find).toBeCalled();
        expect(recommendationRepository.updateScore).toBeCalled();
    });
//
//
//
it('The downvote service must remove the recommendation if the score is under -5', async () => {

    const recommendation = await recommendationFactory();

    jest
        .spyOn(recommendationRepository, 'find')
        .mockImplementationOnce(() : any => {
            return recommendation;
        });
    
    jest
        .spyOn(recommendationRepository, 'updateScore')
        .mockImplementationOnce(() : any => {
            return {
                ...recommendation,
                score: -6
            }
        });
    jest
        .spyOn(recommendationRepository, 'remove')
        .mockImplementationOnce(() : any => {});

    await recommendationService.downvote(1);
    expect(recommendationRepository.find).toBeCalled();
    expect(recommendationRepository.updateScore).toBeCalled();
    expect(recommendationRepository.remove).toBeCalled();
});

    it('The downvote service throw a not found error if the recommendation was not found', async () => {
        jest
            .spyOn(recommendationRepository, 'find')
            .mockImplementationOnce(() : any => {});
    
        const promise = recommendationService.downvote(1);
        expect(promise).rejects.toEqual({
            type: 'not_found',
            message: ''
        })
    });



});



describe('Unit tests of get services', () => {
    it('The service must return the last 10 recommendations', async () => {
        jest
        .spyOn(recommendationRepository, 'findAll')
        .mockImplementationOnce(() : any => {
           return []; 
        });

        const promise = await recommendationService.get();
        expect(recommendationRepository.findAll).toBeCalled();
        expect(promise).toBeInstanceOf(Array);


    });


    it('The service must return a recommendation by the id', async () => {
        const recommendation = await recommendationFactory();
        jest
        .spyOn(recommendationRepository, 'find')
        .mockImplementationOnce(() : any => {
            return recommendation;
        });

        const promise = await recommendationService.getById(1);
        expect(recommendationRepository.find).toBeCalled();
        expect(promise).not.toBeFalsy();
    });


    it('The service throw a error if the id was not found', async () => {
        jest
        .spyOn(recommendationRepository, 'find')
        .mockImplementationOnce(() : any => {});

        const promise = recommendationService.getById(1);
        expect(recommendationRepository.find).toBeCalled();
        expect(promise).rejects.toEqual({
            message: "",
            type: "not_found",
        })  
    });


    it('The getRandom service must return a random recommendation with score greater than 10', async () => {
        jest
        .spyOn(Math, 'random')
        .mockImplementationOnce(() : any => {
            return 0.8;
        });

        jest
        .spyOn(recommendationRepository, 'findAll')
        .mockImplementationOnce(() : any => {
            return [
                {
                    score: 15
                }
            ];
        });

        const promise = await recommendationService.getRandom();
        expect(recommendationRepository.findAll).toBeCalled();
        expect(promise.score).toBeGreaterThan(10);
    
    });
    //
    //
    it('The getRandom service must return a random recommendation with score between -5 and 10', async () => {
        jest
        .spyOn(Math, 'random')
        .mockImplementationOnce(() : any => {
            return 0.5;
        });

        jest
        .spyOn(recommendationRepository, 'findAll')
        .mockImplementationOnce(() : any => {
            return [
                {
                    score: 5
                }
            ];
        });

        const promise = await recommendationService.getRandom();
        expect(recommendationRepository.findAll).toBeCalled();
        expect(promise.score).toBeGreaterThan(-5);
        expect(promise.score).toBeLessThan(10);
    
    });

    //
    //
    it('The getRandom service must throw a not found error if none recommendation was found', async () => {
        jest
        .spyOn(recommendationRepository, 'findAll')
        .mockImplementation(() : any => {  
            return [];
        });

        const promise =  recommendationService.getRandom();
        
       
        expect(recommendationRepository.findAll).toBeCalled();
        expect(promise).rejects.toEqual({
            message: "",
            type: "not_found",
        })    
    });



    
    it('The getTop service must return the X top score recommendations', async () => {
        jest
        .spyOn(recommendationRepository, 'getAmountByScore')
        .mockImplementationOnce(() : any => {
            return [
                {
                    score: 15
                },
                {
                    score: 10
                },
                {
                    score: 3
                }
            ];
        });

        const promise = await recommendationService.getTop(10);
        expect(recommendationRepository.getAmountByScore).toBeCalled();
        expect(promise).toBeInstanceOf(Array);
    });

    
});