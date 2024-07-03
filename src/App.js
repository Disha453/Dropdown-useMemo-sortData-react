import { useMemo, useState } from 'react';
import './App.css';

function App() {

  const [student, setStudent] = useState({ fname: "", lname: "", password: "", email: "" })

  const [data, setData] = useState(JSON.parse(localStorage.getItem("u")) || [])

  const [selected, setSelected] = useState("")



  const fontSubmit = (e) => {
    console.log(e.target.name)
    setStudent({ ...student, [e.target.name]: e.target.value })
  }

  const submit = () => {
    setData([...data, student])
    localStorage.setItem("u", JSON.stringify([...data, student]))

  }



  // const sortedData = data.sort((a, b) => { return (a.fname > b.fname ? 1 : -1) });

  // setData([...sortedData])
  // localStorage.setItem("disha", JSON.stringify(sortedData));
  const sortFname = useMemo(() => {
    if (selected === "w") {
      return data.sort((a, b) => {
        return (a.fname > b.fname ? 1 : -1)
      })
    }
    else if (selected === "x") {
      return data.sort((a, b) => {
        return (a.lname > b.lname ? 1 : -1)
      })
    }
    else if (selected === "y") {
      return data.sort((a, b) => {
        return (a.password > b.password ? 1 : -1)
      })
    }
    else if (selected === "z") {
      return data.sort((a, b) => {
        return (a.email > b.email ? 1 : -1)
      })
    }
    return data
  }, [data, selected]);









  return (
    <>

      <div style={{ backgroundImage: "url(https://png.pngtree.com/thumb_back/fw800/background/20231002/pngtree-vibrant-watercolor-splash-in-orange-hue-image_13603812.png)" }} className="h-[950px]  bg-cover p-2.5  flex  flex-col items-center  justify-center ">

        <div className="flex flex-col gap-[20px]">
          <div >
            <label htmlFor="fname" ><b className="text-xl">Fname:</b></label>
            <input type="text" id="fname" name="fname" value={student.fname} onChange={(e) => fontSubmit(e)} className="rounded-xl  border-yellow-500  ml-2 h-12 w-44  bg-transparent" />
          </div>

          <div >
            <label htmlFor="lname"><b className="text-xl">Lname:</b></label>
            <input type="lname" id="lname" name="lname" value={student.lname} onChange={(e) => fontSubmit(e)} className="rounded-xl  border-yellow-500  ml-2 h-12 w-44  bg-transparent" />
          </div>

          <div>
            <label htmlFor="password"><b className="text-xl">Password:</b></label>
            <input type="password" id="password" name="password" value={student.password} onChange={(e) => fontSubmit(e)} className="rounded-xl  border-yellow-500  ml-2 h-12 w-44  bg-transparent" />
          </div>

          <div>
            <label htmlFor="email"><b className="text-xl ">Email:</b></label>
            <input type="email" id="email" name="email" value={student.email} onChange={(e) => fontSubmit(e)} className="rounded-xl  border-yellow-500  ml-2 h-12 w-44  bg-transparent " />
          </div>

          <div>
            <button className="bg-amber-600 h-12 w-24 rounded-xl  border-yellow-500  ml-[70px] mt-6" onClick={submit}><b>Submit</b></button>
          </div>
        </div>



        <div>
          <select onChange={(e) => setSelected(e.target.value)} className="bg-amber-600 h-12 w-24 rounded-xl  border-yellow-500  mt-12 mr-[50px]">
            <option value="">select field</option>
            <option value="w">fname</option>
            <option value="x">lname</option>
            <option value="y">password</option>
            <option value="z">email</option>
          </select>
        </div>


        <div className="flex justify-center mt-[3%]">

          <table>
            <thead>
              <th>Fname</th>
              <th>Lname</th>
              <th>Password</th>
              <th>Email</th>
            </thead>

            <tbody>
              {sortFname?.map((item, index) => {
                return (
                  <tr>
                    <td>{item.fname}</td>
                    <td>{item.lname}</td>
                    <td>{item.password}</td>
                    <td>{item.email}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>

        </div>
      </div>


    </>
  );
}

export default App;
