document.addEventListener("DOMContentLoaded", function () {
  const dropdowns = document.querySelectorAll(".dropdown");
  const submitButton = document.getElementById("submitBtn");
  const coursesList = document.getElementById("coursesList");
  
  const courses = [

    //      ____________________                  Medi-Caps University            ___________________________________


    //      First Year _______________________________________________________________________________________________________________________________________________________________
    { name: 'Engineering Physics', college: 'medicaps', year: '1', semester: '1', type: 'notes', link: 'https://drive.google.com/file/d/1dGrGLgWgDMEKGLFs6Qsh-eqRwThx43m-/view?usp=drive_link' },
    { name: 'Engineering Chemistry', college: 'medicaps', year: '1', semester: '1', type: 'notes', link: 'https://drive.google.com/drive/folders/1k7NKtWHu143KpANLcGOtMHpZKMADl4yr' },
    { name: 'Engineering Mathematics I', college: 'medicaps', year: '1', semester: '1', type: 'notes', link: 'https://drive.google.com/file/d/1dJX2MzzcWEj83pcnKYWVKTKb5_aXNPy8/view?usp=drive_link' },
    { name: 'Engineering Mathematics II', college: 'medicaps', year: '1', semester: '1', type: 'notes', link: 'https://drive.google.com/file/d/1hP7ABZI0MG3cl_WLSaWEnQOhQhS5dZwg/view?usp=drive_link' },
    { name: 'Communication skills', college: 'medicaps', year: '1', semester: '1', type: 'notes', link: 'https://drive.google.com/file/d/1bNEHxbg1Xe7nWahWShPuX6l7q_xRBshz/view?usp=drive_link' },
    { name: 'Engineering Graphics', college: 'medicaps', year: '1', semester: '1', type: 'notes', link: 'https://drive.google.com/drive/folders/1iuBRSvNLuYv4FQjiJLaXs6vnJkbY4HTF' },
    { name: 'Basic Mechanical Engineering', college: 'medicaps', year: '1', semester: '1', type: 'notes', link: 'https://drive.google.com/drive/folders/1awE1WQNGUDlLIvFUaWMBq4vnO4kwBGaN' },
    { name: 'Basic Electronics Engineering', college: 'medicaps', year: '1', semester: '1', type: 'notes', link: 'https://drive.google.com/drive/folders/1f6CWVkp7rvdZ6IvhQX-8UgxgQTVFJ9BH?usp=drive_link' },
    { name: 'Basic Electrical Engineering', college: 'medicaps', year: '1', semester: '1', type: 'notes', link: 'https://drive.google.com/file/d/1aXD60JboCPXuy7_t7FSzZ_cUgnKMorCD/view?usp=drive_link' },
    { name: 'Basic Civil Engineering', college: 'medicaps', year: '1', semester: '1', type: 'notes', link: 'https://drive.google.com/file/d/1dx8bs8-ht9KHjvSBtbwFXgaIuJIyVGLI/view?usp=drive_link' },
    { name: 'Computer programming I', college: 'medicaps', year: '1', semester: '1', type: 'notes', link: 'https://drive.google.com/drive/folders/1Yttp6jdzLvAdm7ASi-nwvc50hD5eyjAN' },
    { name: 'Computer programming II', college: 'medicaps', year: '1', semester: '1', type: 'notes', link: '' },
    { name: 'History of Science and Technology', college: 'medicaps', year: '1', semester: '1', type: 'notes', link: 'https://drive.google.com/file/d/1aJcKs2j4xESEzPLvq6TH0G2IxLsJdngr/view?usp=drive_link' },
    { name: 'Environmental Science', college: 'medicaps', year: '1', semester: '1', type: 'notes', link: 'https://drive.google.com/file/d/1dN3rIs1UUaQ2__WreTv4FKftrpEGtsd6/view?usp=drive_link' },
    { name: 'Engineering Workshop', college: 'medicaps', year: '1', semester: '1', type: 'notes', link: 'https://drive.google.com/file/d/1dNTnRqAmlPbRpzrcDpMPGz5uXK3XQMou/view?usp=drive_link' },
    //______________________________________________________________________________________________________________________________________________________________________First Year End____________
   
    
    
    //    Second Year_______________________________________________________________________________________________________________________________________________________________________
    { name: 'Data Communication', college: 'medicaps', year: '2', semester: '3', type: 'notes', link: 'https://drive.google.com/drive/folders/1SEzoHc4opwFLYgPDvkPmYUSAYcE-sePR' },
    { name: 'Basic Java Programming', college: 'medicaps', year: '2', semester: '3', type: 'notes', link: 'https://drive.google.com/drive/folders/1SID1BXnX7jb16TCq32MA5cx-TVdBwK6D' },
    { name: 'Computer System Architecture', college: 'medicaps', year: '2', semester: '3', type: 'notes', link: 'https://drive.google.com/drive/folders/1SY0CK3X0kfy2j8PrKYsiVjYFW2GxUut2' },
    { name: 'Digital Electronics', college: 'medicaps', year: '2', semester: '3', type: 'notes', link: 'https://drive.google.com/drive/folders/1SVxDEI6th9Nq7X_XrZgI-Du2k2lGM1Is' },
    { name: 'Advance Java Programming', college: 'medicaps', year: '2', semester: '4', type: 'notes', link: 'https://drive.google.com/drive/folders/1Sg2uoP9eVMoJQ2lsHMhSC318mYW79n8U' },
    { name: 'Operating System', college: 'medicaps', year: '2', semester: '4', type: 'notes', link: 'https://drive.google.com/drive/folders/1TBSPjI0V9Fn45CqsY4zomxgQcKY9TCoT' },
    { name: 'Database Management System', college: 'medicaps', year: '2', semester: '4', type: 'notes', link: 'https://drive.google.com/drive/folders/1Se-RhnD06i6kj4DCP6lQ8rAnPSzMCUot' },
    { name: 'Microprocessor And Interfacing', college: 'medicaps', year: '2', semester: '4', type: 'notes', link: 'https://drive.google.com/drive/folders/1Snzmo12sY8or3gCz4dACKfedZNt5TCc2' },
    { name: 'Cloud Computing', college: 'medicaps', year: '2', semester: '4', type: 'notes', link: 'https://drive.google.com/drive/folders/1SshjU6cSYUny2Vu_TYPUo5rv_r7Df5U3' },
    { name: 'Data Structures', college: 'medicaps', year: '2', semester: '3', type: 'notes', link: 'https://drive.google.com/drive/folders/1SshjU6cSYUny2Vu_TYPUo5rv_r7Df5U3' },
    { name: 'Discrete Mathematics', college: 'medicaps', year: '2', semester: '3', type: 'notes', link: 'https://drive.google.com/drive/folders/1SshjU6cSYUny2Vu_TYPUo5rv_r7Df5U3' },
    { name: 'Theory Of Computation', college: 'medicaps', year: '2', semester: '4', type: 'notes', link: 'https://drive.google.com/drive/folders/1SshjU6cSYUny2Vu_TYPUo5rv_r7Df5U3' },
    { name: 'Object Oriented Programming', college: 'medicaps', year: '2', semester: '3', type: 'notes', link: 'https://drive.google.com/drive/folders/1SshjU6cSYUny2Vu_TYPUo5rv_r7Df5U3' },
    { name: 'Statistics Analysis', college: 'medicaps', year: '2', semester: '4', type: 'notes', link: 'https://drive.google.com/drive/folders/1SshjU6cSYUny2Vu_TYPUo5rv_r7Df5U3' },
    { name: 'R-Programming', college: 'medicaps', year: '2', semester: '4', type: 'notes', link: 'https://drive.google.com/drive/folders/1SshjU6cSYUny2Vu_TYPUo5rv_r7Df5U3' },
    //_______________________________________________________________________________________________________________________________________________________________________Second Year End

   //     Third Year ____________________________________________________________________________________________________________________________________________________________________

       { name: 'Artificial Intelligence', college: 'medicaps', year: '3', semester: '5', type: 'notes', link: 'https://drive.google.com/drive/folders/1SshjU6cSYUny2Vu_TYPUo5rv_r7Df5U3' },
       { name: 'Blockchain Architecture', college: 'medicaps', year: '3', semester: '5', type: 'notes', link: 'https://drive.google.com/drive/folders/1SshjU6cSYUny2Vu_TYPUo5rv_r7Df5U3' },
       { name: 'Python Programming', college: 'medicaps', year: '3', semester: '5', type: 'notes', link: 'https://drive.google.com/drive/folders/1SshjU6cSYUny2Vu_TYPUo5rv_r7Df5U3' },
       { name: 'Computer Networking', college: 'medicaps', year: '3', semester: '5', type: 'notes', link: 'https://drive.google.com/drive/folders/1SshjU6cSYUny2Vu_TYPUo5rv_r7Df5U3' },
       { name: 'Design And Analysis of Algorithms', college: 'medicaps', year: '3', semester: '5', type: 'notes', link: 'https://drive.google.com/drive/folders/1SshjU6cSYUny2Vu_TYPUo5rv_r7Df5U3' },
       { name: 'Web Technology', college: 'medicaps', year: '3', semester: '5', type: 'notes', link: 'https://drive.google.com/drive/folders/1SshjU6cSYUny2Vu_TYPUo5rv_r7Df5U3' },
       { name: 'Software Engineering', college: 'medicaps', year: '3', semester: '5', type: 'notes', link: 'https://drive.google.com/drive/folders/1SshjU6cSYUny2Vu_TYPUo5rv_r7Df5U3' },
       { name: 'Fundamentals of Economics', college: 'medicaps', year: '3', semester: '5', type: 'notes', link: 'https://drive.google.com/drive/folders/1SshjU6cSYUny2Vu_TYPUo5rv_r7Df5U3' },
    //_______________________________________________________________________________________________________________________________________________________________________Third Year End


    //      ____________________                  IPS           ___________________________________
 //      First Year _______________________________________________________________________________________________________________________________________________________________
    { name: 'Optics And Modern Physics', college: 'IPS Academy', year: '1', semester: '1', type: 'notes', link: 'https://drive.google.com/drive/folders/1PFZhNxekaI-kwxN8h709pEpzPoIvre0N' },
    { name: 'Applied Chemistry', college: 'IPS Academy', year: '1', semester: '1', type: 'notes', link: 'https://drive.google.com/drive/folders/1k7NKtWHu143KpANLcGOtMHpZKMADl4yr' },
    { name: 'Engineering Mathematics I', college: 'IPS Academy', year: '1', semester: '1', type: 'notes', link: 'https://drive.google.com/drive/folders/1OT7Hy3ysCcrqk7jeD0xuARpTbGgUGRqK' },
    { name: 'Engineering Mathematics II', college: 'IPS Academy', year: '1', semester: '1', type: 'notes', link: 'https://drive.google.com/drive/folders/1YsY8PVIjgh9cEgy5_yCN-e-bOf1a1m0N' },
    { name: 'Communication skills', college: 'IPS Academy', year: '1', semester: '1', type: 'notes', link: 'https://drive.google.com/drive/folders/1bvYiOGmkRGjGpB97vaRrhboe8CRrcMjs' },
    { name: 'Engineering Graphics And Visualization', college: 'IPS Academy', year: '1', semester: '1', type: 'notes', link: 'https://drive.google.com/drive/folders/1iuBRSvNLuYv4FQjiJLaXs6vnJkbY4HTF' },
    { name: 'Basic Mechanical Engineering', college: 'IPS Academy', year: '1', semester: '1', type: 'notes', link: 'https://drive.google.com/drive/folders/1awE1WQNGUDlLIvFUaWMBq4vnO4kwBGaN' },
    { name: 'Basic Electronics Engineering', college: 'IPS Academy', year: '1', semester: '1', type: 'notes', link: 'https://drive.google.com/drive/folders/1f6CWVkp7rvdZ6IvhQX-8UgxgQTVFJ9BH' },
    { name: 'Basic Electrical Engineering', college: 'IPS Academy', year: '1', semester: '1', type: 'notes', link: 'https://drive.google.com/drive/folders/1O_COyW-nNshDnfKTH8oKrtFDpNU4IYqE' },
    { name: 'Basic Civil Engineering', college: 'IPS Academy', year: '1', semester: '1', type: 'notes', link: 'https://drive.google.com/drive/folders/1aYha6Rtxkp4eSPBjv9tcZ32PtN0QRO8j' },
    { name: 'Programming for problem Solving I', college: 'IPS Academy', year: '1', semester: '1', type: 'notes', link: 'https://drive.google.com/drive/folders/1Yttp6jdzLvAdm7ASi-nwvc50hD5eyjAN' },
    { name: 'Programming for problem Solving II', college: 'IPS Academy', year: '1', semester: '1', type: 'notes', link: 'https://drive.google.com/drive/folders/1Yttp6jdzLvAdm7ASi-nwvc50hD5eyjAN' },
    { name: 'Manufacturing Practices', college: 'IPS Academy', year: '1', semester: '1', type: 'notes', link: 'https://drive.google.com/drive/folders/1O0bOOWmcYky4jNR3GwY412bvWaVKKJuZ' },
    //______________________________________________________________________________________________________________________________________________________________________First Year End____________


    // Second Year_______________________________________________________________________________________________________________________________________________________________________
{ name: 'Data Communication', college: 'IPS Academy', year: '2', semester: '3', type: 'notes', link: 'https://drive.google.com/drive/folders/1SEzoHc4opwFLYgPDvkPmYUSAYcE-sePR' },
{ name: 'Basic Java Programming', college: 'IPS Academy', year: '2', semester: '3', type: 'notes', link: 'https://drive.google.com/drive/folders/1SID1BXnX7jb16TCq32MA5cx-TVdBwK6D' },
{ name: 'Computer System Architecture', college: 'IPS Academy', year: '2', semester: '3', type: 'notes', link: 'https://drive.google.com/drive/folders/1SY0CK3X0kfy2j8PrKYsiVjYFW2GxUut2' },
{ name: 'Digital Electronics', college: 'IPS Academy', year: '2', semester: '3', type: 'notes', link: 'https://drive.google.com/drive/folders/1SVxDEI6th9Nq7X_XrZgI-Du2k2lGM1Is' },
{ name: 'Advance Java Programming', college: 'IPS Academy', year: '2', semester: '4', type: 'notes', link: 'https://drive.google.com/drive/folders/1Sg2uoP9eVMoJQ2lsHMhSC318mYW79n8U' },
{ name: 'Operating System', college: 'IPS Academy', year: '2', semester: '4', type: 'notes', link: 'https://drive.google.com/drive/folders/1TBSPjI0V9Fn45CqsY4zomxgQcKY9TCoT' },
{ name: 'Database Management System', college: 'IPS Academy', year: '2', semester: '4', type: 'notes', link: 'https://drive.google.com/drive/folders/1Se-RhnD06i6kj4DCP6lQ8rAnPSzMCUot' },
{ name: 'Microprocessor And Interfacing', college: 'IPS Academy', year: '2', semester: '4', type: 'notes', link: 'https://drive.google.com/drive/folders/1Snzmo12sY8or3gCz4dACKfedZNt5TCc2' },
{ name: 'Cloud Computing', college: 'IPS Academy', year: '2', semester: '4', type: 'notes', link: 'https://drive.google.com/drive/folders/1SshjU6cSYUny2Vu_TYPUo5rv_r7Df5U3' },
{ name: 'Data Structures', college: 'IPS Academy', year: '2', semester: '3', type: 'notes', link: 'https://drive.google.com/drive/folders/1SshjU6cSYUny2Vu_TYPUo5rv_r7Df5U3' },
{ name: 'Discrete Mathematics', college: 'IPS Academy', year: '2', semester: '3', type: 'notes', link: 'https://drive.google.com/drive/folders/1SshjU6cSYUny2Vu_TYPUo5rv_r7Df5U3' },
{ name: 'Theory Of Computation', college: 'IPS Academy', year: '2', semester: '4', type: 'notes', link: 'https://drive.google.com/drive/folders/1SshjU6cSYUny2Vu_TYPUo5rv_r7Df5U3' },
{ name: 'Object Oriented Programming', college: 'IPS Academy', year: '2', semester: '3', type: 'notes', link: 'https://drive.google.com/drive/folders/1SshjU6cSYUny2Vu_TYPUo5rv_r7Df5U3' },
{ name: 'Statistics Analysis', college: 'IPS Academy', year: '2', semester: '4', type: 'notes', link: 'https://drive.google.com/drive/folders/1SshjU6cSYUny2Vu_TYPUo5rv_r7Df5U3' },
{ name: 'R-Programming', college: 'IPS Academy', year: '2', semester: '4', type: 'notes', link: 'https://drive.google.com/drive/folders/1SshjU6cSYUny2Vu_TYPUo5rv_r7Df5U3' },
//_______________________________________________________________________________________________________________________________________________________________________Second Year End

    // Third Year ____________________________________________________________________________________________________________________________________________________________________
{ name: 'Artificial Intelligence', college: 'IPS Academy', year: '3', semester: '5', type: 'notes', link: 'https://drive.google.com/drive/folders/1SshjU6cSYUny2Vu_TYPUo5rv_r7Df5U3' },
{ name: 'Blockchain Architecture', college: 'IPS Academy', year: '3', semester: '5', type: 'notes', link: 'https://drive.google.com/drive/folders/1SshjU6cSYUny2Vu_TYPUo5rv_r7Df5U3' },
{ name: 'Python Programming', college: 'IPS Academy', year: '3', semester: '5', type: 'notes', link: 'https://drive.google.com/drive/folders/1SshjU6cSYUny2Vu_TYPUo5rv_r7Df5U3' },
{ name: 'Computer Networking', college: 'IPS Academy', year: '3', semester: '5', type: 'notes', link: 'https://drive.google.com/drive/folders/1SshjU6cSYUny2Vu_TYPUo5rv_r7Df5U3' },
{ name: 'Design And Analysis of Algorithms', college: 'IPS Academy', year: '3', semester: '5', type: 'notes', link: 'https://drive.google.com/drive/folders/1SshjU6cSYUny2Vu_TYPUo5rv_r7Df5U3' },
{ name: 'Web Technology', college: 'IPS Academy', year: '3', semester: '5', type: 'notes', link: 'https://drive.google.com/drive/folders/1SshjU6cSYUny2Vu_TYPUo5rv_r7Df5U3' },
{ name: 'Software Engineering', college: 'IPS Academy', year: '3', semester: '5', type: 'notes', link: 'https://drive.google.com/drive/folders/1SshjU6cSYUny2Vu_TYPUo5rv_r7Df5U3' },
{ name: 'Fundamentals of Economics', college: 'IPS Academy', year: '3', semester: '5', type: 'notes', link: 'https://drive.google.com/drive/folders/1SshjU6cSYUny2Vu_TYPUo5rv_r7Df5U3' },
//_______________________________________________________________________________________________________________________________________________________________________Third Year End







// ____________________                  Acropolis           ___________________________________

// First Year _______________________________________________________________________________________________________________________________________________________________

  { name: 'Engineering Physics', college: 'Acropolis', year: '1', semester: '1', type: 'notes', link: 'https://drive.google.com/file/d/1dGrGLgWgDMEKGLFs6Qsh-eqRwThx43m-/view?usp=drive_link' },
  { name: 'Engineering Chemistry', college: 'Acropolis', year: '1', semester: '1', type: 'notes', link: 'https://drive.google.com/drive/folders/1k7NKtWHu143KpANLcGOtMHpZKMADl4yr' },
  { name: 'Engineering Mathematics I', college: 'Acropolis', year: '1', semester: '1', type: 'notes', link: 'https://drive.google.com/file/d/1dJX2MzzcWEj83pcnKYWVKTKb5_aXNPy8/view?usp=drive_link' },
  { name: 'Engineering Mathematics II', college: 'Acropolis', year: '1', semester: '1', type: 'notes', link: 'https://drive.google.com/file/d/1hP7ABZI0MG3cl_WLSaWEnQOhQhS5dZwg/view?usp=drive_link' },
  { name: 'English for Communication', college: 'Acropolis', year: '1', semester: '1', type: 'notes', link: 'https://drive.google.com/file/d/1bNEHxbg1Xe7nWahWShPuX6l7q_xRBshz/view?usp=drive_link' },
  { name: 'Engineering Graphics', college: 'Acropolis', year: '1', semester: '1', type: 'notes', link: 'https://drive.google.com/drive/folders/1iuBRSvNLuYv4FQjiJLaXs6vnJkbY4HTF' },
  { name: 'Basic Mechanical Engineering', college: 'Acropolis', year: '1', semester: '1', type: 'notes', link: 'https://drive.google.com/drive/folders/1awE1WQNGUDlLIvFUaWMBq4vnO4kwBGaN' },
  { name: 'Basic Electronics Engineering', college: 'Acropolis', year: '1', semester: '1', type: 'notes', link: 'https://drive.google.com/drive/folders/1f6CWVkp7rvdZ6IvhQX-8UgxgQTVFJ9BH?usp=drive_link' },
  { name: 'Basic Electrical Engineering', college: 'Acropolis', year: '1', semester: '1', type: 'notes', link: 'https://drive.google.com/file/d/1aXD60JboCPXuy7_t7FSzZ_cUgnKMorCD/view?usp=drive_link' },
  { name: 'Basic Civil Engineering', college: 'Acropolis', year: '1', semester: '1', type: 'notes', link: 'https://drive.google.com/file/d/1dx8bs8-ht9KHjvSBtbwFXgaIuJIyVGLI/view?usp=drive_link' },
  { name: 'Environmental Science', college: 'Acropolis', year: '1', semester: '1', type: 'notes', link: 'https://drive.google.com/file/d/1dN3rIs1UUaQ2__WreTv4FKftrpEGtsd6/view?usp=drive_link' },
  { name: 'Manufacturing Practices', college: 'Acropolis', year: '1', semester: '1', type: 'notes', link: 'https://drive.google.com/file/d/1dNTnRqAmlPbRpzrcDpMPGz5uXK3XQMou/view?usp=drive_link' },
  // First Year End_______________________________________________________________________________________________________________________________________________________________________________



// Second Year_______________________________________________________________________________________________________________________________________________________________________
{ name: 'Data Communication', college: 'Acropolis', year: '2', semester: '3', type: 'notes', link: 'https://drive.google.com/drive/folders/1SEzoHc4opwFLYgPDvkPmYUSAYcE-sePR' },
{ name: 'Basic Java Programming', college: 'Acropolis', year: '2', semester: '3', type: 'notes', link: 'https://drive.google.com/drive/folders/1SID1BXnX7jb16TCq32MA5cx-TVdBwK6D' },
{ name: 'Computer System Architecture', college: 'Acropolis', year: '2', semester: '3', type: 'notes', link: 'https://drive.google.com/drive/folders/1SY0CK3X0kfy2j8PrKYsiVjYFW2GxUut2' },
{ name: 'Digital Electronics', college: 'Acropolis', year: '2', semester: '3', type: 'notes', link: 'https://drive.google.com/drive/folders/1SVxDEI6th9Nq7X_XrZgI-Du2k2lGM1Is' },
{ name: 'Advance Java Programming', college: 'Acropolis', year: '2', semester: '4', type: 'notes', link: 'https://drive.google.com/drive/folders/1Sg2uoP9eVMoJQ2lsHMhSC318mYW79n8U' },
{ name: 'Operating System', college: 'Acropolis', year: '2', semester: '4', type: 'notes', link: 'https://drive.google.com/drive/folders/1TBSPjI0V9Fn45CqsY4zomxgQcKY9TCoT' },
{ name: 'Database Management System', college: 'Acropolis', year: '2', semester: '4', type: 'notes', link: 'https://drive.google.com/drive/folders/1Se-RhnD06i6kj4DCP6lQ8rAnPSzMCUot' },
{ name: 'Microprocessor And Interfacing', college: 'Acropolis', year: '2', semester: '4', type: 'notes', link: 'https://drive.google.com/drive/folders/1Snzmo12sY8or3gCz4dACKfedZNt5TCc2' },
{ name: 'Cloud Computing', college: 'Acropolis', year: '2', semester: '4', type: 'notes', link: 'https://drive.google.com/drive/folders/1SshjU6cSYUny2Vu_TYPUo5rv_r7Df5U3' },
{ name: 'Data Structures', college: 'Acropolis', year: '2', semester: '3', type: 'notes', link: 'https://drive.google.com/drive/folders/1SshjU6cSYUny2Vu_TYPUo5rv_r7Df5U3' },
{ name: 'Discrete Mathematics', college: 'Acropolis', year: '2', semester: '3', type: 'notes', link: 'https://drive.google.com/drive/folders/1SshjU6cSYUny2Vu_TYPUo5rv_r7Df5U3' },
{ name: 'Theory Of Computation', college: 'Acropolis', year: '2', semester: '4', type: 'notes', link: 'https://drive.google.com/drive/folders/1SshjU6cSYUny2Vu_TYPUo5rv_r7Df5U3' },
{ name: 'Object Oriented Programming', college: 'Acropolis', year: '2', semester: '3', type: 'notes', link: 'https://drive.google.com/drive/folders/1SshjU6cSYUny2Vu_TYPUo5rv_r7Df5U3' },
{ name: 'Statistics Analysis', college: 'Acropolis', year: '2', semester: '4', type: 'notes', link: 'https://drive.google.com/drive/folders/1SshjU6cSYUny2Vu_TYPUo5rv_r7Df5U3' },
{ name: 'R-Programming', college: 'Acropolis', year: '2', semester: '4', type: 'notes', link: 'https://drive.google.com/drive/folders/1SshjU6cSYUny2Vu_TYPUo5rv_r7Df5U3' },
//_______________________________________________________________________________________________________________________________________________________________________Second Year End

// Third Year ____________________________________________________________________________________________________________________________________________________________________
{ name: 'Artificial Intelligence', college: 'Acropolis', year: '3', semester: '5', type: 'notes', link: 'https://drive.google.com/drive/folders/1SshjU6cSYUny2Vu_TYPUo5rv_r7Df5U3' },
{ name: 'Blockchain Architecture', college: 'Acropolis', year: '3', semester: '5', type: 'notes', link: 'https://drive.google.com/drive/folders/1SshjU6cSYUny2Vu_TYPUo5rv_r7Df5U3' },
{ name: 'Python Programming', college: 'Acropolis', year: '3', semester: '5', type: 'notes', link: 'https://drive.google.com/drive/folders/1SshjU6cSYUny2Vu_TYPUo5rv_r7Df5U3' },
{ name: 'Computer Networking', college: 'Acropolis', year: '3', semester: '5', type: 'notes', link: 'https://drive.google.com/drive/folders/1SshjU6cSYUny2Vu_TYPUo5rv_r7Df5U3' },
{ name: 'Design And Analysis of Algorithms', college: 'Acropolis', year: '3', semester: '5', type: 'notes', link: 'https://drive.google.com/drive/folders/1SshjU6cSYUny2Vu_TYPUo5rv_r7Df5U3' },
{ name: 'Web Technology', college: 'Acropolis', year: '3', semester: '5', type: 'notes', link: 'https://drive.google.com/drive/folders/1SshjU6cSYUny2Vu_TYPUo5rv_r7Df5U3' },
{ name: 'Software Engineering', college: 'Acropolis', year: '3', semester: '5', type: 'notes', link: 'https://drive.google.com/drive/folders/1SshjU6cSYUny2Vu_TYPUo5rv_r7Df5U3' },
{ name: 'Fundamentals of Economics', college: 'Acropolis', year: '3', semester: '5', type: 'notes', link: 'https://drive.google.com/drive/folders/1SshjU6cSYUny2Vu_TYPUo5rv_r7Df5U3' },
//_______________________________________________________________________________________________________________________________________________________________________Third Year End
                   
//      ____________________                MIT           ___________________________________


    // First Year _______________________________________________________________________________________________________________________________________________________________

  { name: 'Engineering Physics', college: 'MIT', year: '1', semester: '1', type: 'notes', link: 'https://drive.google.com/file/d/1dGrGLgWgDMEKGLFs6Qsh-eqRwThx43m-/view?usp=drive_link' },
  { name: 'Engineering Chemistry', college: 'MIT', year: '1', semester: '1', type: 'notes', link: 'https://drive.google.com/drive/folders/1k7NKtWHu143KpANLcGOtMHpZKMADl4yr' },
  { name: 'Engineering Mathematics I', college: 'MIT', year: '1', semester: '1', type: 'notes', link: 'https://drive.google.com/file/d/1dJX2MzzcWEj83pcnKYWVKTKb5_aXNPy8/view?usp=drive_link' },
  { name: 'Engineering Mathematics II', college: 'MIT', year: '1', semester: '1', type: 'notes', link: 'https://drive.google.com/file/d/1hP7ABZI0MG3cl_WLSaWEnQOhQhS5dZwg/view?usp=drive_link' },
  { name: 'English for Communication', college: 'MIT', year: '1', semester: '1', type: 'notes', link: 'https://drive.google.com/file/d/1bNEHxbg1Xe7nWahWShPuX6l7q_xRBshz/view?usp=drive_link' },
  { name: 'Engineering Graphics', college: 'MIT', year: '1', semester: '1', type: 'notes', link: 'https://drive.google.com/drive/folders/1iuBRSvNLuYv4FQjiJLaXs6vnJkbY4HTF' },
  { name: 'Basic Mechanical Engineering', college: 'MIT', year: '1', semester: '1', type: 'notes', link: 'https://drive.google.com/drive/folders/1awE1WQNGUDlLIvFUaWMBq4vnO4kwBGaN' },
  { name: 'Basic Electronics Engineering', college: 'MIT', year: '1', semester: '1', type: 'notes', link: 'https://drive.google.com/drive/folders/1f6CWVkp7rvdZ6IvhQX-8UgxgQTVFJ9BH?usp=drive_link' },
  { name: 'Basic Electrical Engineering', college: 'MIT', year: '1', semester: '1', type: 'notes', link: 'https://drive.google.com/file/d/1aXD60JboCPXuy7_t7FSzZ_cUgnKMorCD/view?usp=drive_link' },
  { name: 'Basic Civil Engineering', college: 'MIT', year: '1', semester: '1', type: 'notes', link: 'https://drive.google.com/file/d/1dx8bs8-ht9KHjvSBtbwFXgaIuJIyVGLI/view?usp=drive_link' },
  { name: 'Environmental Science', college: 'MIT', year: '1', semester: '1', type: 'notes', link: 'https://drive.google.com/file/d/1dN3rIs1UUaQ2__WreTv4FKftrpEGtsd6/view?usp=drive_link' },
  { name: 'Manufacturing Practices', college: 'MIT', year: '1', semester: '1', type: 'notes', link: 'https://drive.google.com/file/d/1dNTnRqAmlPbRpzrcDpMPGz5uXK3XQMou/view?usp=drive_link' },
  // First Year End
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
