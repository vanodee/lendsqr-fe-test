// REACT ROUTER IMPORTS
import { Link, useLoaderData } from "react-router";

// ICON IMPORTS
import BackArrowIcon from '../assets/icons/backArrow.svg?react'
import LargeAvatarIcon from '../assets/icons/avatarLarge.svg?react'

// TIER COMPONENT IMPORT FOR GENERATING STARS (see Tier.tsx)
import Tier from "../components/Tier";

// INTERFACE IMPORT FOR LOADER FUNCTION (see UserDataLoader.tsx)
import { UserData } from '../components/UserDataLoader'


export default function SingleUserPage() {

  // JSON data from loader function is stored with type of UserData
  const user = useLoaderData<UserData>();


  return (
    <div className="singleUser-page">
      
      <Link to='..'>
        <div className="back-button">
          <BackArrowIcon />
          <p>Back to Users</p>
        </div>
      </Link>
      
      <div className="singleUser-actions">
        <h1>User Details</h1>
        <div>
          <button className="btn-error-outlined">BLACKLIST USER</button>
          <button className="btn-secondary-outlined">ACTIVATE USER</button>
        </div>
      </div>

      <div className="singleUser-header">

        <div className="singleUser-summary">
          <LargeAvatarIcon />

          <div>
            <h2>{user.personal_information.full_name}</h2>
            <h3>{user.customer_number}</h3>
          </div>

          <Tier tier={user.tier} />

          <div>
            <h2>{`₦${user.bank_details.account_balance.toLocaleString()}.00`}</h2>
            <p>{`${user.bank_details.account_number}/${user.bank_details.bank_name}`}</p>
          </div>
        </div>

        <div className="singleUser-nav">
          <div>General Details</div>
          <div>Documents</div>
          <div>Bank Details</div>
          <div>Loans</div>
          <div>Savings</div>
          <div>App and System</div>
        </div>

      </div>

      <div className="singleUser-body">

        {/* PERSONAL INFORMATION ---------------------------------------------- */}
        <section>
          <h5>Personal Information</h5>

          <div>
            <h4>FULL NAME</h4>
            <p>{user.personal_information.full_name}</p>
          </div>

          <div>
            <h4>PHONE NUMBER</h4>
            <p>{user.personal_information.phone_number}</p>
          </div>

          <div>
            <h4>EMAIL ADDRESS</h4>
            <p>{user.personal_information.email_address}</p>
          </div>

          <div>
            <h4>BVN</h4>
            <p>{user.personal_information.bvn}</p>
          </div>

          <div>
            <h4>GENDER</h4>
            <p>{user.personal_information.gender}</p>
          </div>

          <div>
            <h4>MARITAL STATUS</h4>
            <p>{user.personal_information.marital_status}</p>
          </div>

          <div>
            <h4>CHILDREN</h4>
            <p>{user.personal_information.children}</p>
          </div>

          <div>
            <h4>TYPE OF RESIDENCE</h4>
            <p>{user.personal_information.type_of_residence}</p>
          </div>
        </section>

        <hr />

        {/* EDUCATION AND EMPLOYMENT ---------------------------------------------- */}
        <section>
          <h5>Education and Employment</h5>

          <div>
            <h4>LEVEL OF EDUCATION</h4>
            <p>{user.education_and_employment.level_of_education}</p>
          </div>

          <div>
            <h4>EMPLOYMENT STATUS</h4>
            <p>{user.education_and_employment.employment_status}</p>
          </div>

          <div>
            <h4>SECTOR OF EMPLOYMENT</h4>
            <p>{user.education_and_employment.sector_of_employment}</p>
          </div>

          <div>
            <h4>DURATION OF EMPLOYMENT</h4>
            <p>{`${user.education_and_employment.duration_of_employment} Years`}</p>
          </div>

          <div>
            <h4>OFFICE EMAIL</h4>
            <p>{user.education_and_employment.office_email}</p>
          </div>

          <div>
            <h4>MONTHLY INCOME</h4>
            <p>{user.education_and_employment.monthly_income}</p>
          </div>

          <div>
            <h4>LOAN REPAYMENT</h4>
            <p>{user.education_and_employment.loan_repayment}</p>
          </div>
        </section>

        <hr />

        {/* SOCIALS ---------------------------------------------- */}
        <section>
          <h5>Socials</h5>

          <div>
            <h4>TWITTER</h4>
            <p>{user.socials.twitter}</p>
          </div>

          <div>
            <h4>FACEBOOK</h4>
            <p>{user.socials.facebook}</p>
          </div>

          <div>
            <h4>INSTAGRAM</h4>
            <p>{user.socials.instagram}</p>
          </div>
        </section>

        <hr />

        {/* GUARANTOR ---------------------------------------------- */}
        <section>
          <h5>Guarantor</h5>

          <div>
            <h4>FULL NAME</h4>
            <p>{user.guarantor[0].full_name}</p>
          </div>

          <div>
            <h4>PHONE NUMBER</h4>
            <p>{user.guarantor[0].phone_number}</p>
          </div>

          <div>
            <h4>EMAIL ADDRESS</h4>
            <p>{user.guarantor[0].email_address}</p>
          </div>

          <div>
            <h4>RELATIONSHIP</h4>
            <p>{user.guarantor[0].relationship}</p>
          </div>
        </section>

      </div>

    </div>
  )
}