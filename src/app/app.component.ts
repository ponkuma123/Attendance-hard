import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  Date:any=["2021-07-20","2021-07-21","2021-07-22","2021-07-23","2021-07-24","2021-07-25","2021-07-26"]

  data = [
    {
        "attendance": {
            "2021-07-20": [
                {
                    "atd": true,
                    "emp_id": 1,
                    "shift": 1
                },
                {
                    "atd": true,
                    "emp_id": 2,
                    "shift": 1
                },
                {
                    "atd": true,
                    "emp_id": 3,
                    "shift": 1
                },
                {
                    "atd": false,
                    "emp_id": 4,
                    "shift": 1
                }
            ],
            "2021-07-21": [
                {
                    "atd": true,
                    "emp_id": 1,
                    "shift": 1
                },
                {
                    "atd": false,
                    "emp_id": 2,
                    "shift": 1
                },
                {
                    "atd": true,
                    "emp_id": 3,
                    "shift": 1
                },
                {
                    "atd": false,
                    "emp_id": 4,
                    "shift": 1
                },
                {
                  "atd": false,
                  "emp_id": 5,
                  "shift": 1
              }
            ],
            "2021-07-22": [
                {
                    "atd": true,
                    "emp_id": 1,
                    "shift": 1
                },
                {
                    "atd": true,
                    "emp_id": 2,
                    "shift": 1
                },
                {
                    "atd": true,
                    "emp_id": 3,
                    "shift": 1
                },
                {
                    "atd": false,
                    "emp_id": 4,
                    "shift": 1
                },
                {
                  "atd": false,
                  "emp_id": 5,
                  "shift": 1
              }
            ],
            "2021-07-24": [
              
              {
                  "atd": true,
                  "emp_id": 2,
                  "shift": 1
              },
              {
                  "atd": true,
                  "emp_id": 3,
                  "shift": 1
              },
              {
                  "atd": false,
                  "emp_id": 4,
                  "shift": 1
              },
              
          ],
            
            "2021-07-23": [
              {
                  "atd": true,
                  "emp_id": 1,
                  "shift": 1
              },
              {
                  "atd": true,
                  "emp_id": 2,
                  "shift": 1
              },
              {
                  "atd": true,
                  "emp_id": 3,
                  "shift": 1
              },
              {
                  "atd": false,
                  "emp_id": 4,
                  "shift": 1
              },
              {
                "atd": false,
                "emp_id": 5,
                "shift": 1
            }
          ],
          "2021-07-26": [
            {
                "atd": true,
                "emp_id": 1,
                "shift": 1
            },
            {
                "atd": true,
                "emp_id": 2,
                "shift": 1
            },
            
            {
                "atd": true,
                "emp_id": 4,
                "shift": 1
            },
            {
              "atd": false,
              "emp_id": 5,
              "shift": 1
          },
          
        ],
        "2021-07-25": [
          {
              "atd": true,
              "emp_id": 1,
              "shift": 1
          },
          {
              "atd": true,
              "emp_id": 2,
              "shift": 1
          },
          
          {
              "atd": true,
              "emp_id": 4,
              "shift": 1
          },
          {
            "atd": false,
            "emp_id": 5,
            "shift": 1
        },
        {
          "atd": false,
          "emp_id": 6,
          "shift": 1
      }
        
      ]

        },
        "employee": [
            {
                "code": "empl3",
                "id": 1,
                "name": "raj"
            },
            {
                "code": "empl4",
                "id": 2,
                "name": "moni"
            },
            {
                "code": "empl5",
                "id": 3,
                "name": "viki"
            },
            {
                "code": "empl6",
                "id": 4,
                "name": "vini"
            },
            {
                "code": "empl7",
                "id": 5,
                "name": "sam"
            },
            {
              "code": "empl8",
              "id": 6,
              "name": "pon"
          }
        ]
    }
]

click()
{
  let result=[];
  let keys=Object.keys(this.data[0].attendance)
  for(let i=0;i<keys.length;i++)
  {
    
    result.push(Object.keys(this.data[0].attendance)[i])
  }
  
  return result;
}

find(val,emp_id)
{
  let obj=this.data[0].attendance[val]
  console.log(obj)
  for(let i=0;i<obj.length;i++)
  {
    if(obj[i].emp_id==emp_id)
    {     
       
      return obj[i].atd ;
    }
  }
  return "AB";
  
}

Shift(val,emp_id)
{
  for(let i=0;i<val.length;i++)
  {
    let obj=this.data[0].attendance[val[i]]
    console.log(obj)
    for(let i=0;i<obj.length;i++)
    {
      if(obj[i].emp_id==emp_id)
      {     
        
        return obj[i].shift ;
      }
    }

  }
  
  
}

findval(Date1,val,sepdate)
{

  console.log(" Date", Date1)
  console.log("keys",val)
  let value=[]

  for(let i=0;i<Date1.length;i++)
  {
    let check=val.indexOf(Date1[i])
    if(check == -1)
    {
      value.push(Date1[i])
    }
    
  }
  
  let check=value.indexOf(sepdate)
  if(check != -1)
  {
    return true
  }

}

}
