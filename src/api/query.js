export const requete = {
    query: 
        `{
        
            user {
                            id
                            firstName
                            lastName
                            login
                            email
                            campus
                            auditRatio
                            totalUp
                            totalDown
                                             attrs
                                          
                      xps (where: {path: {_niregex: ".piscine-js.|.piscine-go.|.checkpoint." }}) {
                                amount
                                path
                            }
                            events (where: {event: {path: {_ilike: "%div-01"}}}){
                                level
                            }
                            transactions_aggregate (where: {event: {path: {_ilike: "/dakar/div-01"}}, _and: {type: {_eq: "xp"}}}) {
                                aggregate {
                                    sum {
                                        amount
                                    }
                                }
                            }
                            createdAt
                        }
                    }       
            `
}