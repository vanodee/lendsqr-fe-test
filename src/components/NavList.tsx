// REACT ROUTER IMPORTS
import { NavLink } from "react-router"

// ICON IMPORTS
import SwitchOrgIcon from '../assets/icons/switchOrg.svg?react'
import DropdownIcon2 from '../assets/icons/dropdown2.svg?react'
import DashboardIcon from '../assets/icons/dashboard.svg?react'
import UsersIcon from '../assets/icons/users.svg?react'
import GuarantorsIcon from '../assets/icons/guarantors.svg?react'
import LoansIcon from '../assets/icons/loans.svg?react'
import DecisionIcon from '../assets/icons/decisionModels.svg?react'
import SavingsIcon from '../assets/icons/savings.svg?react'
import LoanRequestIcon from '../assets/icons/loadrequests.svg?react'
import WhitelistIcon from '../assets/icons/whitelist.svg?react'
import KarmaIcon from '../assets/icons/karma.svg?react'
import SavingsPoductIcon from '../assets/icons/saveProducts.svg?react'
import FeesIcon from '../assets/icons/feesCharges.svg?react'
import TransactionsIcon from '../assets/icons/transactions.svg?react'
import ServicesIcon from '../assets/icons/services.svg?react'
import ServiceAccountIcon from '../assets/icons/serviceAccount.svg?react'
import SettlementsIcon from '../assets/icons/settlements.svg?react'
import ReportsIcon from '../assets/icons/reports.svg?react'
import PreferencesIcon from '../assets/icons/preferences.svg?react'
import FeesPriceIcon from '../assets/icons/feesPricing.svg?react'
import AuditLogIcon from '../assets/icons/auditLogs.svg?react'
import LogOutIcon from '../assets/icons/logOut.svg?react'



export default function NavList() {

  // user logOut function
  const userLogout = ():void => {

    // Set authentication status to FALSE & store variable in localStorage
    localStorage.setItem("isAuthenticated", "false");       
    
    // Reload the page so that react-router gets the updated authentication status and redirects accordingly (see App.tsx)
    window.location.reload();                                
  }


  return (
    <nav className="nav-list">
      
      <div className="nav-dropdown">
        <SwitchOrgIcon />
        <p>Switch Organization</p>
        <DropdownIcon2 />
      </div>

      <NavLink to="dashboard" className={({ isActive }) => isActive ? 'active-navlink' : 'navlink'} end>
        <DashboardIcon />
        <p>Dashboard</p>
      </NavLink>


      {/* CUSTOMERS ------------------------------------------------------------------------------ */}
      <h5>CUSTOMERS</h5>

      <NavLink to="users" className={({ isActive }) => isActive ? 'active-navlink' : 'navlink'}>
        <UsersIcon />
        <p>Users</p>
      </NavLink>

      <NavLink to="guarantors" className={({ isActive }) => isActive ? 'active-navlink' : 'navlink'} end>
        <GuarantorsIcon />
        <p>Guarantors</p>
      </NavLink>

      <NavLink to="loans" className={({ isActive }) => isActive ? 'active-navlink' : 'navlink'} end>
        <LoansIcon />
        <p>Loans</p>
      </NavLink>

      <NavLink to="decision_models" className={({ isActive }) => isActive ? 'active-navlink' : 'navlink'} end>
        <DecisionIcon />
        <p>Decision Models</p>
      </NavLink>

      <NavLink to="savings" className={({ isActive }) => isActive ? 'active-navlink' : 'navlink'} end>
        <SavingsIcon />
        <p>Savings</p>
      </NavLink>

      <NavLink to="loan_requests" className={({ isActive }) => isActive ? 'active-navlink' : 'navlink'} end>
        <LoanRequestIcon />
        <p>Loan Requests</p>
      </NavLink>

      <NavLink to="whitelist" className={({ isActive }) => isActive ? 'active-navlink' : 'navlink'} end>
        <WhitelistIcon />
        <p>Whitelist</p>
      </NavLink>

      <NavLink to="karma" className={({ isActive }) => isActive ? 'active-navlink' : 'navlink'} end>
        <KarmaIcon />
        <p>Karma</p>
      </NavLink>


      {/* BUSINESSES ------------------------------------------------------------------------------ */}
      <h5>BUSINESSES</h5>

      <NavLink to="organization" className={({ isActive }) => isActive ? 'active-navlink' : 'navlink'} end>
        <SwitchOrgIcon />
        <p>Organization</p>
      </NavLink>

      <NavLink to="loan_products" className={({ isActive }) => isActive ? 'active-navlink' : 'navlink'} end>
        <LoanRequestIcon />
        <p>Loan Products</p>
      </NavLink>

      <NavLink to="savings_products" className={({ isActive }) => isActive ? 'active-navlink' : 'navlink'} end>
        <SavingsPoductIcon />
        <p>Savings Products</p>
      </NavLink>

      <NavLink to="fees_charges" className={({ isActive }) => isActive ? 'active-navlink' : 'navlink'} end>
        <FeesIcon />
        <p>Fees and Charges</p>
      </NavLink>

      <NavLink to="transactions" className={({ isActive }) => isActive ? 'active-navlink' : 'navlink'} end>
        <TransactionsIcon />
        <p>Transactions</p>
      </NavLink>

      <NavLink to="services" className={({ isActive }) => isActive ? 'active-navlink' : 'navlink'} end>
        <ServicesIcon />
        <p>Services</p>
      </NavLink>

      <NavLink to="service_account" className={({ isActive }) => isActive ? 'active-navlink' : 'navlink'} end>
        <ServiceAccountIcon />
        <p>Service Account</p>
      </NavLink>

      <NavLink to="settlements" className={({ isActive }) => isActive ? 'active-navlink' : 'navlink'} end>
        <SettlementsIcon />
        <p>Settlements</p>
      </NavLink>

      <NavLink to="reports" className={({ isActive }) => isActive ? 'active-navlink' : 'navlink'} end>
        <ReportsIcon />
        <p>Reports</p>
      </NavLink>


      {/* SETTINGS ------------------------------------------------------------------------------ */}
      <h5>SETTINGS</h5>

      <NavLink to="preferences" className={({ isActive }) => isActive ? 'active-navlink' : 'navlink'} end>
        <PreferencesIcon />
        <p>Preferences</p>
      </NavLink>

      <NavLink to="fees_pricing" className={({ isActive }) => isActive ? 'active-navlink' : 'navlink'} end>
        <FeesPriceIcon />
        <p>Fees and Pricing</p>
      </NavLink>

      <NavLink to="audit_logs" className={({ isActive }) => isActive ? 'active-navlink' : 'navlink'} end>
        <AuditLogIcon />
        <p>Audit Logs</p>
      </NavLink>

      <NavLink to="system_messages" className={({ isActive }) => isActive ? 'active-navlink' : 'navlink'} end>
        <ReportsIcon />
        <p>System Messages</p>
      </NavLink>

      <hr />

      <div className="log-out" onClick={userLogout}>
        <LogOutIcon />
        <p>Log Out</p>
      </div>

      <p className="version-info">v1.2.0</p>

    </nav>
  )
}