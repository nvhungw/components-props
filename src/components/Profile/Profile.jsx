import Avatar from "../Avatar/Avatar"

const Profile = () => {
    return(
        <>
        <Avatar imgSrc="https://i.imgur.com/iEBQ4KA.jpeg" imgWidth={100} imgMeta={{name: 'sample1', id: 4}}/>
        <Avatar imgSrc="https://i.imgur.com/rSnSOKDb.jpg" imgWidth={150} imgMeta={{name: 'sample2', id: 2}}/>
        <Avatar imgSrc="https://i.imgur.com/Qpw6j8Db.jpg" imgWidth={200} imgMeta={{name: 'sample3', id: 7}}/>
        </>
    )
}

export default Profile;