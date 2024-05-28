// import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";

// import { useLocation, Link, useNavigate } from "react-router-dom";
// import { useAllJobsContext } from "../pages/AllJobs";

// const PageBtnContainer = () => {
//   const {
//     data: { numOfPages, currentPage },
//   } = useAllJobsContext();
//   const { search, pathname } = useLocation();
//   const navigate = useNavigate();
//   const pages = Array.from({ length: numOfPages }, (_, index) => index + 1);

//   const handlePageChange = (pageNumber) => {
//     const searchParams = new URLSearchParams(search);
//     searchParams.set("page", pageNumber);
//     navigate(`${pathname}?${searchParams.toString()}`);
//   };

//   return (
//     <div>
//       <button

//         onClick={() => {
//           let prevPage = currentPage - 1;
//           if (prevPage < 1) prevPage = numOfPages;
//           handlePageChange(prevPage);
//         }}
//       >
//         <HiChevronDoubleLeft />
//         prev
//       </button>
//       <div >
//         {pages.map((pageNumber) => (
//           <button
//             className={`btn page-btn ${pageNumber === currentPage && "active"}`}
//             key={pageNumber}
//             onClick={() => handlePageChange(pageNumber)}
//           >
//             {pageNumber}
//           </button>
//         ))}
//       </div>
//       <button

//         onClick={() => {
//           let nextPage = currentPage + 1;
//           if (nextPage > numOfPages) nextPage = 1;
//           handlePageChange(nextPage);
//         }}
//       >
//         next
//         <HiChevronDoubleRight />
//       </button>
//     </div>
//   );
// };

// export default PageBtnContainer;
