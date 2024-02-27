export const QueryUserData = `
 {
  user {
    id
    email
    firstName
    lastName
    login
    campus
    auditRatio
    audits(order_by: {createdAt: asc}, where: {grade: {_is_null: false}}) {
      id
      group {
        captainLogin
        object{name}
      }
      updatedAt
      grade
    }
    validAudits: audits_aggregate(where: {grade: {_gte: 1}}) {
      aggregate {
        count
      }
    }
    invalidAudits: audits_aggregate(where: {grade: {_lt: 1}}) {
      aggregate {
        count
      }
    }
    level: events(where: {event: {registrationId: {_eq: 55}}}) {
      level
    }
  }
  transaction_aggregate(
    where: {event: {registrationId: {_eq: 55}}, type: {_eq: "xp"}}
    order_by: {createdAt:asc}
  ) {
    nodes {
      amount
      createdAt
      object {
        name
      }
    }
    aggregate {
      sum {
        amount
      }
    }
  }
skills:transaction (order_by: { type: asc, amount: desc } distinct_on: [type]  where: {type: {_ilike: "skill%"}} ) {
                amount
                type
            }
  upRatio: transaction_aggregate(where: {type: {_eq: "up"}}) {
    aggregate {
      sum {
        amount
      }
    }
  }
  downRatio: transaction_aggregate(where: {type: {_eq: "down"}}) {
    aggregate {
      sum {
        amount
      }
    }
  }
}
`;
