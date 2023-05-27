import React from 'react'
import "./Modal.css"
import { Category } from '@mui/icons-material'
import { Select } from '@material-ui/core'

const modalFormData = [
    {
        "title": "Video Link",
        "error": "This link will be used to derive the video",
        "input": "text",
    },
    {
        "title": "Thumbnail Image Link",
        "error": "This link will be used to preview the thumbnail image",
        "input": "text",

    },
    {
        "title": "Title",
        "error": "This link will be representation text for videos",
        "input": "text",

    },
    {
        "title": "Genre",
        "error": "Genre will help in categorizing your videos",
        "input": "select",
        "category": [
            "Education",
            "Movie",
            "Comedy",
            "Lifestyle",
            "Sports"
        ],
    },
    {
        "title": "Suitable age or group for the clip ",
        "error": "This will be used to filter video on age group suitability",
        "input": "select",
        "age": [
            "7+",
            "12+",
            "16+",
            "18+"
        ]
    },
    {
        "title": "Upload and Publish date",
        "error": "This will be used to sort videos",
        "input": "calender"
    },
]

const Modals = ({ setModalOpen, modalOpen }) => {

    return (
        <div className="modal" >
            <div className="dialogBox">
                <div className="dialog-title">
                    <h3>Upload Video</h3>
                    <button onClick={() => setModalOpen(!modalOpen)}>X</button>
                </div>
                <form action="" className='dailogForm'>
                    {modalFormData.map((item, id) =>
                        <div className='input-dialog' key={id}>
                            <label htmlFor="">{item.title}</label>
                            {
                                item.input === "select" ?
                                    (item.category ?
                                        <select>
                                            {item.category.map((item, id) =>
                                                <option key={id}>
                                                    {item}
                                                </option>
                                            )}
                                        </select>
                                        :
                                        <select>
                                            {item.age.map((item, id) =>
                                                <option key={id}>
                                                    {item}
                                                </option>)}
                                        </select>
                                    )
                                    :
                                    (item.input === "calender" ?
                                        <input type="date" /> 
                                        :
                                        < input type="text" />
                                    )
                            }
                            <span>{item.error}</span>
                        </div>
                    )}
                    {/* <div className='input-dialog'>
                        <label htmlFor="">Video Link</label>
                        <input type="text" />
                        <span>error</span>
                    </div>
                    <div className='input-dialog'>
                        <label htmlFor="">Title</label>
                        <input type="text" />
                        <span>error</span>
                    </div>
                    <div className='input-dialog'>
                        <label htmlFor="">Genre</label>
                        <input type="text" />
                        <span>error</span>
                    </div>
                    <div className='input-dialog'>
                        <label htmlFor="">Suitable Age</label>
                        <input type="text" />
                        <span>error</span>
                    </div>
                    <div className='input-dialog'>
                        <label htmlFor="">Upload And Publish Date</label>
                        <input type="text" />
                        <span>error</span>
                    </div> */}
                    {/* <input type="text" />
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />
                    <input type="text" /> */}
                </form>
                <div className="dialog-bottom">
                    <button className='uploadButton'>Upload Video</button>
                    <button className='cancelButton'>Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default Modals