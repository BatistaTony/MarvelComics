import md5 from 'js-md5'


export const FETCH_MARVEL_REQUEST = 'FETCH_MARVEL_REQUESTED'

export const FETCH_MARVEL_FAILURE = 'FETCH_MARVEL_FAILURE'

export const FETCH_MARVEL_SUCESS = 'FETCH_MARVEL_SUCESS'

export function seeQ(payload) {
  return {
    type: 'SEE_Q',
    payload
    }
}


export  function getMarvel(){
                              const PUBLIC_KEY  = '71386610f059ad09953a084a3dc6a1a6'
                              const PRIVATE_KEY = '462df9eb996a92db3cbc369d899c2eacb8cf7a12'
                              const hash  = md5.create()
                              const timestamp = Number(new Date())

                              
                              hash.update(timestamp + PRIVATE_KEY + PUBLIC_KEY)
                              const alb = fetch(
                                `https://gateway.marvel.com/v1/public/characters?ts=${timestamp}&orderBy=name&limit=10&apikey=${PUBLIC_KEY}&hash=${hash.hex()}`
                              );

                              return dispatch => {
                                dispatch({
                                  type: FETCH_MARVEL_REQUEST
                                });

                                alb
                                  .then(({ data }) =>
                                    dispatch({
                                      type: FETCH_MARVEL_SUCESS,
                                      payload: data
                                    })
                                  )

                                  .catch(err =>
                                    dispatch({
                                      type: FETCH_MARVEL_FAILURE,
                                      payload: err
                                    })
                                  );
                              };
                            }