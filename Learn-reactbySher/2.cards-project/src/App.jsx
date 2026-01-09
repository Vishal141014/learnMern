import React from 'react'
import Card from './components/Card'

const App = () => {
    // const arr = [10,20,30,40]

const jobOpenings = [
  {
    brandLogo: "https://logo.clearbit.com/google.com",
    nameOfCompany: "Google",
    datePosted: "5 days ago",
    post: "Frontend Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: 45,
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/apple.com",
    nameOfCompany: "Apple",
    datePosted: "2 weeks ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: 50,
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/meta.com",
    nameOfCompany: "Meta",
    datePosted: "1 week ago",
    post: "React Developer",
    tag1: "Remote",
    tag2: "Senior Level",
    pay: 65,
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/amazon.com",
    nameOfCompany: "Amazon",
    datePosted: "3 days ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: 40,
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/netflix.com",
    nameOfCompany: "Netflix",
    datePosted: "4 weeks ago",
    post: "Platform Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 70,
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/microsoft.com",
    nameOfCompany: "Microsoft",
    datePosted: "6 days ago",
    post: "Cloud Support Engineer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: 35,
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/tesla.com",
    nameOfCompany: "Tesla",
    datePosted: "10 weeks ago",
    post: "Software Automation Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: 55,
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/nvidia.com",
    nameOfCompany: "NVIDIA",
    datePosted: "8 days ago",
    post: "AI Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 75,
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/salesforce.com",
    nameOfCompany: "Salesforce",
    datePosted: "2 days ago",
    post: "CRM Developer",
    tag1: "Remote",
    tag2: "Mid Level",
    pay: 48,
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/ibm.com",
    nameOfCompany: "IBM",
    datePosted: "1 week ago",
    post: "Data Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: 42,
    location: "Mumbai, India"
  }
];
    return (
        <div className='parent'>
           {/* {arr.map(function(elem){
            return elem;
            return <Card />
           })} */}
           
           {
            jobOpenings.map(function(elem, index){
                // return <Card logo={elem.brandLogo} company={elem.nameOfCompany} date={elem.datePosted} post={elem.post} time={elem.tag1} pos={elem.tag2} paym={elem.pay} loc={elem.location} />

                return <div key={index}>
                    <Card logo={elem.brandLogo} company={elem.nameOfCompany} date={elem.datePosted} post={elem.post} time={elem.tag1} pos={elem.tag2} paym={elem.pay} loc={elem.location} />
                </div>
            })
           }
        </div>
    )
}

export default App