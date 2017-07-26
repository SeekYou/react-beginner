function Comment(props) {
	return (
		<div className="Comment">

			<div className="UserInfo">

				<img src={props.author.avatarUrl} alt={props.author.name} className="Avatar"/>

				<div className="UserInfo-name">
					{props.author.name}
				</div>

			</div>

			<div className="Comment-text">
				{props.text}
			</div>

			<div className="Comment-date">
				{formatDate(props.date)}
			</div>

		</div>
	)
}

function Comment(props) {
	return (
		<div className="Comment">

			<div className="UserInfo">

				<Avatar user={props.author} />

				<div className="UserInfo-name">
					{props.author.name}
				</div>

			</div>

			<div className="Comment-text">
				{props.text}
			</div>

			<div className="Comment-date">
				{formatDate(props.date)}
			</div>

		</div>
	)
}

function Avatar(props) {
	return (
		<img src={props.user.avatarUrl} alt={props.user.name} className="Avatar"/>
	)
}

function UserInfo(props) {
	return (
		<div className="UserInfo">
			<Avatar user={props.user} />
			<div className="UserInfo-name">
				{props.user.name}
			</div>
		</div>
	)
}

function Comment(props) {
	return (
		<div className="Comment">

			<UserInfo user={props.author}/>

			<div className="Comment-text">
				{props.text}
			</div>

			<div className="Comment-date">
				{formatDate(props.date)}
			</div>

		</div>
	)
}
