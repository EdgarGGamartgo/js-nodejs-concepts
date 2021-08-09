export const myCompany = {
  sales: [{ name: "Allie", salary: 1000 }, { name: "Allie", salary: 1000 }],
  development: {
    sites: [{ name: "Jeff", salary: 1000 }, { name: "Mike", salary: 1000 }],
    marketing: [{ name: "Sophie", salary: 1000 }, { name: "Edgar", salary: 1000 }],
    maintanance: {
      legacy: [{ name: "Sophie", salary: 1000 }, { name: "Edgar", salary: 1000 }],
      sporadic: [{ name: "Sophie", salary: 1000 }, { name: "Edgar", salary: 1000 }]
    }
  }
}

export const myOtherCompany = [{ name: "Allie", salary: 1000 }, { name: "Allie", salary: 1000 }]

export const sumSalaries = (company: any) => {
  if (Array.isArray(company)) {
    return company.reduce((prevValue, current) => prevValue + current.salary, 0);
  } else {
    let sum = 0;
    for (const e of Object.values(company)) {
      sum += sumSalaries(e)
    }
    return sum
  }
}
