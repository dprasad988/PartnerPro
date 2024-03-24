import React from 'react'

export default function Sidebar() {
  return (
    <div className='container-fluid '>
        <div className='row'>
            <div className='bg-dark col-auto col-md-3 min-vh-100 '>
                <a className='text-white text-decoration-none d-flex align-content-center '>
                    <i className='fs-4 bi bi-speedometer'></i>
                    <span className='ms-1 fs-4 '>Brand</span>
                </a>
                <ul
                    class="nav nav-pills flex-column">
                    <li class="nav-item text-white fs-4 ">
                        <a href="#" class="nav-link text-white fs-5 " aria-current="page">
                            <i className='bi bi-speedometer2'></i>
                            <span className='ms-2 fs-5 '>Home</span>
                        </a>
                    </li>
                    <li class="nav-item text-white fs-4 ">
                        <a href="#" class="nav-link text-white fs-5 " aria-current="page">
                            <i className='bi bi-speedometer2'></i>
                            <span className='ms-2 fs-5 '>Projects</span>
                        </a>
                    </li>
                </ul>
                
            </div>
        </div>
    </div>
  )
}
