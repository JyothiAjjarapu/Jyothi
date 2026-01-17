import ProjectsCard from "./ProjectsCard";
import "./css/projects.css";
// import profilePic from './assets/images/jyo-linkedin.jfif';

export default function Projects() 
{
    return (

        <>

        <h2 className="section-title">Projects</h2>
        <br/>
         <div className="projects-section"> 
           
            <ProjectsCard                 
                title = {"Rakshak - A Remote Healthcare Monitoring System"}
                // image = {profilePic}
                description = {"Developed and deployed an end-to-end Remote Healthcare Monitoring System for the Indian Army, integrating ECG, SpO2,and Tele-Stethoscope monitoring through a secure cloud-hosted website and mobile app."
                                +"Enhanced system capabilities with Spandan ECG integration, PPG machine development, and advanced algorithms for improved ECG data accuracy, ensuring robust health monitoring in challenging terrains like Leh and Ladakh."
                                +"Ensured data security with SSL protocols and successfully conducted field experiments in harsh conditions, demonstrating system functionality and presenting the project at the Indian Army headquarters in Mathura."} 
                techstack={["PHP", "MySQL", "Python", "AWS", "API Testing", "Kotlin", "Arduino"]}
            />

             <ProjectsCard                 
                title = {"Security Enhancement in Bitcoin Blockchain"}
                // image = {"path/to/image.jpg"}
                description = {"Enhanced security through modified hashing techniques, Merkle tree computations, and digital signature verification to optimize both security and verification speed. Improved digital signature verification for transactions and newly mined blocks by implementing and comparing various algorithms based on verification time, security, and usability."} 
                techstack={["SHA-256", "Bitcoin", "Java", "Blockchain", "ECDSA"]}
            />

            <ProjectsCard                 
                title = {"Multi-Container Docker Deployment with Integrated Web Applications"}
                // image = {"path/to/image.jpg"}
                description = {"Developed a multi-container Docker setup hosting a PHP web application and MySQL database for student record management. Integrated a Flask service to demonstrate inter-container communication within an isolated Docker network"} 
                techstack={["Docker", "PHP", "MySQL", "Python (Flask)", "Apache"]}
            />

            <ProjectsCard                 
                title = {"Benchmarking Pandas and PySpark for Large-Scale Data Analysis"}
                // image = {profilePic}
                description = {"My project involved benchmarking Pandas and PySpark for handling a 10.7GB dataset. It demonstrated PySpark's superior performance in memory management, execution speed, and resource utilization compared to Pandas, which failed to process the dataset."}
                techstack={["Performance Benchmarking", "Pandas (Software)", "system resource management", "PySpark", "Data Engineering"]} 
            />

            <ProjectsCard                 
                title = {"Data Migration between MongoDB and SQL Server Using Virtual Machines"}
                // image = {"path/to/image.jpg"}
                description = {"This project involved setting up two virtual machines (VMs) using GCP cloud services to simulate a MongoDB server and a SQL Server for the purpose of data migration. The goal was to transfer data between these two databases using both direct scripts and Flask APIs."} 
                techstack={["SQL", "GCP", "virtual machine management", "Networking", "MongoDB", "Flask", "Data Migration Techniques", "Python", "Linux"]}
            />

            <ProjectsCard                 
                title={"DataPrep.EDA: Task-Centric Exploratory Data Analysis for Statistical Modeling in Python"}
                // image={"path/to/iitjodhpur_logo.jpg"}
                description={ "A Python-based project leveraging DataPrep.EDA to streamline task-centric exploratory data analysis (EDA) for statistical modeling. The project focuses on efficient univariate and bivariate analysis, improved performance, and better usability compared to traditional tools like pandas-profiling, especially for smaller datasets."}
                techstack={["Python", "DataPrep.EDA", "Pandas", "pandas-profiling", "Data Visualization", "EDA", "Performance Optimization", "Benchmarking"]}
            />


            <ProjectsCard                 
                title = {" Face Mask Detection and Recognition using OpenCV"}
                // image = {"path/to/image.jpg"}
                description = {"Worked on developing a real-time face mask detection system using OpenCV, achieving 93% accuracy with SVM classification.Enabled live webcam-based monitoring for mask compliance in public areas, enhancing public health safety.Worked on developing a real-time face mask detection system using OpenCV, achieving 93% accuracy with SVM classification. Enabled live webcam-based monitoring for mask compliance in public areas, enhancing public health safety."} 
                techstack={["Machine Learning", "OpenCV", "Image processing", "SVM", "python"]}
            />

        </div>

        </>
       
        
    )
}