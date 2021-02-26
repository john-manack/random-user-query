import React, { Component } from 'react';
import UserCard from './UserCard';

class UserList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: [],
        }
    }
    
    _loadData = async () => {
        const data = await fetch('https://randomuser.me/api/?results=1').then(response => response.json());
        return data;
    }

    async componentDidMount() {
        const apiData = await this._loadData();
        console.log("COMPONENT MOUNTED");
        console.log("user data", apiData);
        this.setState({
            userData: apiData.results,
        })
    }

    render() {
        const { userData } = this.state;
        return (
            <>
                {userData.length ? (
                    <UserCard user={userData} />
                ) : (
                    <p>Loading User Data</p>
                )}
            </>
        );
    }
}

export default UserList;