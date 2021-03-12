import React from 'react'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectDirectorySections} from '../../components/directory/directorySelector'
import MenuItem from '../menu-item/MenuItem'
import './directory.scss'

const Directory = ({sections}) => {
  return (
    <div className="directory">
      {sections.map(({title, imageUrl, id, size}) => (
        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
      ))}
    </div>
  )
}
const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
})
export default connect(mapStateToProps)(Directory)
