import React, { useState } from 'react'
import "./Modal.css"
import { Category } from '@mui/icons-material'
import { Select } from '@material-ui/core'
var url =
    "https://9844e596-66a7-44a4-b2e1-ae10f6ebbd7a.mock.pstmn.io/v1/videos";

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

    const [modalData, setModalData] = useState({
        "Video Link": "",
        "Thumbnail Image Link": "",
        "Title": "",
        "Genre": "Education",
        "Suitable age or group for the clip": "7",
        "Upload and Publish date": ""
    })

    const handleModalData = (e) => {
        const { name, value } = e.target;
        setModalData({ ...modalData, [name]: value });

    }

    // form submission
    const handleModalForm = async(e) => {
        e.prevent.default();
        try {
            let res = await fetch(url, {
                method: "POST",
                body: JSON.stringify({
                    "Video Link": modalData['Video Link'],
                    "Thumbnail Image Link": modalData["Thumbnail Image Link"],
                    "Title": modalData['Suitable age or group for the clip'],
                    "Genre": modalData["Genre"],
                    "Suitable age or group for the clip": modalData["Suitable age or group for the clip"],
                    "Upload and Publish date": modalData["Upload and Publish date"]
                }),
            });
            let resJson = await res.json();
            if (res.status === 200) {
                // setName("");
                // setEmail("");
                // setMessage("User created successfully");
                console.log("successful");
            } else {
                // setMessage("Some error occured");
                console.log("error");
            }
        } catch (err) {
            console.log(err);
            e.prevent.default();
        }
    }
    return (
        <div className="modal" >
            <div className="dialogBox">
                <div className="dialog-title">
                    <h3>Upload Video</h3>
                    <button onClick={() => setModalOpen(!modalOpen)}>X</button>
                </div>
                <form action="" className='dailogForm' onSubmit={(e) => handleModalForm(e)}>
                    {modalFormData.map((item, id) =>
                        <div className='input-dialog' key={id}>
                            <label htmlFor="">{item.title}</label>
                            {
                                item.input === "select" ?
                                    (item.category ?
                                        <select value={modalData.item} name={item.title} onChange={(e) => handleModalData(e)}>
                                            {item.category.map((item, id) =>
                                                <option key={id} value={item}>
                                                    {item}
                                                </option>
                                            )}
                                        </select>
                                        :
                                        <select value={modalData.item} name={item.title} onChange={(e) => handleModalData(e)}>
                                            {item.age.map((item, id) =>
                                                <option key={id} value={item}>
                                                    {item}
                                                </option>)}
                                        </select>
                                    )
                                    :
                                    (item.input === "calender" ?
                                        <input type="date" required value={modalData.item} onChange={(e) => handleModalData(e)} name={item.title} />
                                        :
                                        < input type="text" required value={modalData.item} onChange={(e) => handleModalData(e)} name={item.title} />
                                    )
                            }
                            <span>{item.error}</span>
                        </div>
                    )}
                    <div className="dialog-bottom">
                        <button className='uploadButton' type='submit'>Upload Video</button>
                        <button className='cancelButton'
                            onClick={() => setModalOpen(!modalOpen)}>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Modals