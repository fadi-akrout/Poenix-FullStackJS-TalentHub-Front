import { useGetUsersQuery } from "./usersApiSlice"
import User from './User'
import PulseLoader from 'react-spinners/PulseLoader'
import Header from "../../ClientComponent/HomePage/Header"
import Footer from "../../ClientComponent/Dashboard/Footer"

const UsersList = () => {

    const {
        data: users,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetUsersQuery('usersList', {
        pollingInterval: 60000,
        refetchOnFocus: true,
        refetchOnMountOrArgChange: true
    })

    let content

    if (isLoading) content = <PulseLoader color={"#FFF"} />
    if (isError) {
        content = <p className="errmsg">{error?.data?.message}</p>
    }
    if (isSuccess) {
        const { ids } = users

        const tableContent = ids?.length && ids.map(userId => <User key={userId} userId={userId} />)

        content = (
            <>
            <div>
            <Header />
          </div>
          <section className="contact-us" id="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 align-self-center">
              <div className="row">
                <div className="col-lg-12"></div>
            <table className="table table--users">
                <thead className="">
                    <tr>
                        <th scope="" className="">Username</th>
                        <th scope="" className="">Email</th>
                        <th scope="" className="">Roles</th>
                        <th scope="" className="">Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {tableContent}
                </tbody>
            </table>
            
            </div>
            </div>
            </div>
            </div>
            </section>
            <section className="upcoming-meetings" id="meetings">
        <Footer />
      </section>
            </>
        )
    }

    return content
}
export default UsersList