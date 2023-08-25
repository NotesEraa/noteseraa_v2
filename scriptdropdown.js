document.addEventListener("DOMContentLoaded", function () {
  const dropdowns = document.querySelectorAll(".dropdown");
  const submitButton = document.getElementById("submitBtn");
  const coursesList = document.getElementById("coursesList");
  
  const courses = [
    { name: 'Engineering Physics', college: 'medicaps', year: '1', semester: '1', type: 'notes', link: 'https://drive.google.com/drive/folders/1PFZhNxekaI-kwxN8h709pEpzPoIvre0N' },
    { name: 'Engineering Chemistry', college: 'medicaps', year: '1', semester: '1', type: 'notes', link: 'https://drive.google.com/drive/folders/1k7NKtWHu143KpANLcGOtMHpZKMADl4yr' },
    { name: 'Engineering Mathematics I', college: 'medicaps', year: '1', semester: '1', type: 'notes', link: 'https://drive.google.com/drive/folders/1OT7Hy3ysCcrqk7jeD0xuARpTbGgUGRqK' },
    { name: 'Engineering Mathematics II', college: 'medicaps', year: '1', semester: '1', type: 'notes', link: 'https://drive.google.com/drive/folders/1YsY8PVIjgh9cEgy5_yCN-e-bOf1a1m0N' },
    { name: 'Communication skills', college: 'medicaps', year: '1', semester: '1', type: 'notes', link: 'https://drive.google.com/drive/folders/1bvYiOGmkRGjGpB97vaRrhboe8CRrcMjs' },
    { name: 'Engineering Graphics', college: 'medicaps', year: '1', semester: '1', type: 'notes', link: 'https://drive.google.com/drive/folders/1iuBRSvNLuYv4FQjiJLaXs6vnJkbY4HTF' },
    { name: 'Basic Mechanical Engineering', college: 'medicaps', year: '1', semester: '1', type: 'notes', link: 'https://drive.google.com/drive/folders/1awE1WQNGUDlLIvFUaWMBq4vnO4kwBGaN' },
    { name: 'Basic Electronics Engineering', college: 'medicaps', year: '1', semester: '1', type: 'notes', link: 'https://drive.google.com/drive/folders/1f6CWVkp7rvdZ6IvhQX-8UgxgQTVFJ9BH' },
    { name: 'Basic Electrical Engineering', college: 'medicaps', year: '1', semester: '1', type: 'notes', link: 'https://drive.google.com/drive/folders/1O_COyW-nNshDnfKTH8oKrtFDpNU4IYqE' },
    { name: 'Basic Civil Engineering', college: 'medicaps', year: '1', semester: '1', type: 'notes', link: 'https://drive.google.com/drive/folders/1aYha6Rtxkp4eSPBjv9tcZ32PtN0QRO8j' },
    { name: 'Computer programming I', college: 'medicaps', year: '1', semester: '1', type: 'notes', link: 'https://drive.google.com/drive/folders/1Yttp6jdzLvAdm7ASi-nwvc50hD5eyjAN' },
    { name: 'Computer programming II', college: 'medicaps', year: '1', semester: '1', type: 'notes', link: 'https://drive.google.com/drive/folders/1Yttp6jdzLvAdm7ASi-nwvc50hD5eyjAN' },
    { name: 'History of Science and Technology', college: 'medicaps', year: '1', semester: '1', type: 'notes', link: 'https://drive.google.com/drive/folders/1CtST5vsRB8dluSpWObNvnWpzNbVlaUVZ' },
    { name: 'Environmental Science', college: 'medicaps', year: '1', semester: '1', type: 'notes', link: 'https://drive.google.com/drive/folders/1YoMrOkM3n9Wc8Q2kKP1tRy_P9Ujs3l1Z' },
    { name: 'Engineering Workshop', college: 'medicaps', year: '1', semester: '1', type: 'notes', link: 'https://drive.google.com/drive/folders/1O0bOOWmcYky4jNR3GwY412bvWaVKKJuZ' },
    { name: 'Data Communication', college: 'medicaps', year: '2', semester: '3', type: 'notes', link: 'https://drive.google.com/drive/folders/1SEzoHc4opwFLYgPDvkPmYUSAYcE-sePR' },
    { name: 'Basic Java Programming', college: 'medicaps', year: '2', semester: '3', type: 'notes', link: 'https://drive.google.com/drive/folders/1SID1BXnX7jb16TCq32MA5cx-TVdBwK6D' },
    { name: 'Computer System Architecture', college: 'medicaps', year: '2', semester: '3', type: 'notes', link: 'https://drive.google.com/drive/folders/1SY0CK3X0kfy2j8PrKYsiVjYFW2GxUut2' },
    { name: 'Digital Electronics', college: 'medicaps', year: '2', semester: '3', type: 'notes', link: 'https://drive.google.com/drive/folders/1SVxDEI6th9Nq7X_XrZgI-Du2k2lGM1Is' },
    { name: 'Advance Java Programming', college: 'medicaps', year: '2', semester: '4', type: 'notes', link: 'https://drive.google.com/drive/folders/1Sg2uoP9eVMoJQ2lsHMhSC318mYW79n8U' },
    { name: 'Operating System', college: 'medicaps', year: '2', semester: '4', type: 'notes', link: 'https://drive.google.com/drive/folders/1TBSPjI0V9Fn45CqsY4zomxgQcKY9TCoT' },
    { name: 'Database Management System', college: 'medicaps', year: '2', semester: '4', type: 'notes', link: 'https://drive.google.com/drive/folders/1Se-RhnD06i6kj4DCP6lQ8rAnPSzMCUot' },
    { name: 'Microprocessor And Interfacing', college: 'medicaps', year: '2', semester: '4', type: 'notes', link: 'https://drive.google.com/drive/folders/1Snzmo12sY8or3gCz4dACKfedZNt5TCc2' },
     { name: 'Cloud Computing', college: 'medicaps', year: '2', semester: '4', type: 'notes', link: 'https://drive.google.com/drive/folders/1SshjU6cSYUny2Vu_TYPUo5rv_r7Df5U3' },
    // ... (other courses with links)
  ];
  

  dropdowns.forEach((dropdown) => {
    const select = dropdown.querySelector(".select");
    const menu = dropdown.querySelector(".menu");

    select.addEventListener("click", () => {
      menu.classList.toggle("menu-open");
      select.querySelector(".caret").classList.toggle("caret-rotate");
      select.classList.toggle("select-clicked");
    });

    const options = menu.querySelectorAll("li");
    options.forEach((option) => {
      option.addEventListener("click", () => {
        select.querySelector(".selected").textContent = option.textContent;
        menu.classList.remove("menu-open");
        select.querySelector(".caret").classList.remove("caret-rotate");
        select.classList.remove("select-clicked");
      });
    });
  });

  submitButton.addEventListener("click", () => {
    const college = document.querySelector(".dropdown:nth-child(1) .selected").textContent;
    const year = document.querySelector(".dropdown:nth-child(2) .selected").textContent;
    const type = document.querySelector(".dropdown:nth-child(3) .selected").textContent;

    const matchingCourses = courses.filter(course => 
      course.college.toLowerCase() === college.toLowerCase() &&
      course.year === year &&
      course.type.toLowerCase() === type.toLowerCase()
    );

    if (matchingCourses.length === 0) {
      coursesList.textContent = "No matching data found.";
    } else {
      coursesList.innerHTML = "";
      matchingCourses.forEach(course => {
        coursesList.innerHTML += `
          <div class="course-card">
            <h2>${course.name}</h2>
            <p><a href="${course.link}" target="_blank" class="card-link" >View Details</a></p>
          </div>
        `;
      });
    }
  });
});
