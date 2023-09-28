import './styles.css';
import { StarIcon } from '../../../Components/Icons/StarIcon';
export function Exercise() {
  return (
    <div className="wrapper">
      <table className="table-tennis">
        {/* pierwszy wiersz tabeli */}
        <thead>
          <tr>
            <th>Location</th>

            <th>PLAYER_ID</th>

            <th>Rating</th>
          </tr>
        </thead>
        {/* drugi wiersz tabeli */}

        <tbody></tbody>
        <tr>
          <td>Cape Verde Island</td>

          <td>#100120</td>

          <td>
            <StarIcon />
            <StarIcon />
          </td>
        </tr>

        <tr>
          <td>Cape Verde Island</td>

          <td>#100122</td>

          <td>
            <StarIcon />
            <StarIcon />
            <StarIcon />
          </td>
        </tr>
        <tr>
          <tr>
            <td>Cape Verde Island</td>

            <td>#100124</td>

            <td>
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </td>
          </tr>

          <tr>
            <td>United States of America</td>

            <td>#100126</td>

            <td>
              <StarIcon />
            </td>

            <tr>
              <td>Unites States of America</td>

              <td>#100128</td>

              <td>
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </td>
            </tr>
          </tr>
        </tr>
      </table>
    </div>
  );
}
