import React, { useState } from 'react'

const PhonePhoto = () => {
  const [imgUrl, setImgUrl] = useState<any>(null)
  const [img64, setImg64] = useState<any>()

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { files },
    }: any = event
    const targetFile = files[0]
    const reader = new FileReader()
    reader.onload = () => {
      setImgUrl(reader.result)
      setImg64(targetFile)
    }
    reader.readAsDataURL(targetFile)
  }

  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement> | React.MouseEvent,
  ) => {
    event.preventDefault()
    const frm = new FormData()
    frm.append('file', img64)
    console.log('frm', frm)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          name="imageFile"
          accept="image/*"
          onChange={handleChange}
        />
        <img src={imgUrl} alt="" width={'200px'} />
        <button onClick={handleSubmit}>버튼</button>
      </form>
    </div>
  )
}

export default PhonePhoto
