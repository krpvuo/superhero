// import { Form } from "react-router-dom"

// export const action = async ({ request }) => {
//     const formData = await request.formData()
//     const data = Object.fromEntries(formData)
//     console.log(data);
//     return null
// }

// export const Newsletter = () => {
//     return (
//         <main>
//             <Form className="form" method="POST">
//                 <h4 style={{ textAlign: 'center', marginBottom: '2rem' }}>Our Newsletter</h4>

//                 <div className="form-row">
//                     <label htmlFor="name" className="form-label">name</label>
//                     <input type="text" className="form-input" name="name" id="name" defaultValue="andrey" />
//                 </div>
//                 <div className="form-row">
//                     <label htmlFor="email" className="form-label">last email</label>
//                     <input type="text" className="form-input" name="email" id="email" defaultValue="karpov" />
//                 </div>
//                 <div className="form-row">
//                     <label htmlFor="email" className="form-label">email</label>
//                     <input type="text" className="form-input" name="email" id="email" defaultValue="luffytaroyo@gmail.com" />
//                 </div>
//                 <button type="submit" className="btn btn-block" style={{ marginTop: '0.5rem' }}>submit</button>
//             </Form>
//         </main>
//     )
// }