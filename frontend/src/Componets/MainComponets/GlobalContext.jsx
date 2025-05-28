
import React, { createContext, useState, useEffect } from 'react';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  /** --------------------
   *  Employee Skills
   *  -------------------- */
  const [empSkills, setEmployeSkills] = useState([]);

  useEffect(() => {
    async function fetchEmpskills() {
      try {
        const response = await fetch('http://127.0.0.1:8000/empskill/');
        const data = await response.json();
        setEmployeSkills(data);
      } catch (error) {
        console.error('Error fetching employee skills:', error);
      }
    }
    fetchEmpskills();
  }, []);
  const addEmpskill = async (newSkill) => {
    try {
      const response = await fetch('http://127.0.0.1:8000/empskill/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newSkill),
      });
      if (response.ok) {
        const data = await response.json();
        setEmployeSkills((prev) => [...prev, data]);
      } else {
        const errData = await response.json();
        console.error('Add error:', errData);
      }
    } catch (error) {
      console.error('Error adding employee skill:', error);
    }
  };

  const updateEmpskill = async (id, updatedSkill) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/empskill/${id}/`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedSkill),
      });
      if (response.ok) {
        const data = await response.json();
        setEmployeSkills((prev) =>
          prev.map((skill) => (skill.id === id ? data : skill))
        );
      } else {
        const errData = await response.json();
        console.error('Update error:', errData);
      }
    } catch (error) {
      console.error('Error updating employee skill:', error);
    }
  };

  

  const deleteEmpskill = async (id) => {
if (!window.confirm("Are you sure you want to delete this?")) {
      return;
    }

    try {
      await fetch(`http://127.0.0.1:8000/empskill/${id}/`, {
        
        method: 'DELETE',
      });
      setEmployeSkills((prev) => prev.filter((skill) => skill.id !== id));
    } catch (error) {
      console.error('Error deleting employee skill:', error);
    }
  };
  const [Skill, setskill] = useState([]);

  useEffect(() => {
    async function fetchskills() {
      try {
        const response = await fetch('http://127.0.0.1:8000/skill/');
        const data = await response.json();
        setskill(data);
      } catch (error) {
        console.error('Error fetching employee skills:', error);
      }
    }
    fetchskills();
  }, []);

  const addskill = async (newSkill) => {
    try {
      const response = await fetch('http://127.0.0.1:8000/skill/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newSkill),
      });
      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error:", errorData);
        alert("Failed to submit form: " + JSON.stringify(errorData));
      } else {
        const data = await response.json();
        alert("Skill successfully Added");
                console.log("Response:", data);
                navigate("/Skill");
      }
    } catch (error) {
      console.error('Error adding skill:', error);
    }
  };

  const updateSkill = async (id, updatedSkill) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/skill/${id}/`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedSkill),
      });
      if (response.ok) {
        const data = await response.json();
        setskill((prev) =>
          prev.map((skill) => (skill.id === id ? data : skill))
        );
      } else {
        const errData = await response.json();
        console.error('Update error:', errData);
      }
    } catch (error) {
      console.error('Error updating employee skill:', error);
    }
  };

  const Deleteskiill = async (id) => {
    try {
      await fetch(`http://127.0.0.1:8000/empskill/${id}/`, {
        method: 'DELETE',
      });
      setEmployeSkills((prev) => prev.filter((skill) => skill.id !== id));
    } catch (error) {
      console.error('Error deleting employee skill:', error);
    }
  };
  /** --------------------
   *  Departments
   *  -------------------- */
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    async function fetchDepartments() {
      try {
        const response = await fetch('http://127.0.0.1:8000/departement/');
        const data = await response.json();
        setDepartments(data);
      } catch (error) {
        console.error('Error fetching departments:', error);
      }
    }
    fetchDepartments();
  }, []);

  const addDepartment = async (newDept) => {
    try {
      const response = await fetch('http://127.0.0.1:8000/department/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newDept),
      });
      if (response.ok) {
        const data = await response.json();
        setDepartments((prev) => [...prev, data]);
      } else {
        const errData = await response.json();
        console.error('Add department error:', errData);
      }
    } catch (error) {
      console.error('Error adding department:', error);
    }
  };

  const updateDepartment = async (id, updatedDept) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/department/${id}/`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedDept),
      });
      if (response.ok) {
        const data = await response.json();
        setDepartments((prev) =>
          prev.map((dept) => (dept.id === id ? data : dept))
        );
      } else {
        const errData = await response.json();
        console.error('Update department error:', errData);
      }
    } catch (error) {
      console.error('Error updating department:', error);
    }
  };

  const deleteDepartment = async (id) => {
    try {
      await fetch(`http://127.0.0.1:8000/department/${id}/`, {
        method: 'DELETE',
      });
      setDepartments((prev) => prev.filter((dept) => dept.id !== id));
    } catch (error) {
      console.error('Error deleting department:', error);
    }
  };

  /** --------------------
   *  Employee Details
   *  -------------------- */
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    async function fetchEmployees() {
      try {
        const response = await fetch('http://127.0.0.1:8000/empdetails/');
        const data = await response.json();
        setEmployees(data);
      } catch (error) {
        console.error('Error fetching employees:', error);
      }
    }
    fetchEmployees();
  }, []);

  const addEmployee = async (newEmployee) => {
    try {
      const response = await fetch('http://127.0.0.1:8000/empdetails/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newEmployee),
      });
      if (response.ok) {
        const data = await response.json();
        setEmployees((prev) => [...prev, data]);
      } else {
        const errData = await response.json();
        console.error('Add employee error:', errData);
      }
    } catch (error) {
      console.error('Error adding employee:', error);
    }
  };

  const updateEmployee = async (id, updatedEmployee) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/empdetails/${id}/`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedEmployee),
      });
      if (response.ok) {
        const data = await response.json();
        setEmployees((prev) =>
          prev.map((emp) => (emp.id === id ? data : emp))
        );
      } else {
        const errData = await response.json();
        console.error('Update employee error:', errData);
      }
    } catch (error) {
      console.error('Error updating employee:', error);
    }
  };

  const deleteEmployee = async (id) => {
    try {
      await fetch(`http://127.0.0.1:8000/empdetails/${id}/`, {
        method: 'DELETE',
      });
      setEmployees((prev) => prev.filter((emp) => emp.id !== id));
    } catch (error) {
      console.error('Error deleting employee:', error);
    }
  };

  /** --------------------
   *  Provide the state and functions to children
   *  -------------------- */
  return (
    <GlobalContext.Provider
      value={{
        
        empSkills,
        addEmpskill,
        updateEmpskill,
        deleteEmpskill,
        
        Skill,
        addskill,
        updateSkill,
        Deleteskiill,
        departments,
        addDepartment,
        updateDepartment,
        deleteDepartment,
        
        employees,
        addEmployee,
        updateEmployee,
        deleteEmployee,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
