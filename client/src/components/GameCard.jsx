/* eslint-disable react/prop-types */
import { Button, Paper, Typography } from "@mui/material"


const GameCard = ({ league}) => {
  return (
    <div>
            <Paper
              sx={{
                marginBottom: "2px",
                display: "flex",
                flexDirection: "column",
                // width: 295,
              }}
              // style={{borderRadiusTop: "5px",}}
            >
              <div
                style={{
                  backgroundColor: "black",
                  color: "white",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                  paddingTop: "5px",
                  paddingBottom: "5px",
                  borderRadius: "5px 5px 0 0",
                }}
              >
                <Typography style={{fontSize: "12px"}}>Premiere League</Typography>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                  padding: "20px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "40px",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <div>
                      <img
                        src={league.home_team_logo}
                        style={{
                          width: "42px",
                          height: "42px",
                          objectFit: "cover",
                          borderRadius: "5px",
                        }}
                      />
                    </div>
                    <div>
                      <Typography style={{ fontSize: "14px" }} noWrap>
                        {league.home_team}
                      </Typography>{" "}
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <div>
                      <Typography style={{ fontSize: "12px" }}>
                        Tomorrow
                      </Typography>
                    </div>
                    <div>
                      <Typography
                        style={{ fontWeight: "bold", fontSize: "20px" }}
                      >
                        03:40
                      </Typography>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <div>
                      <img
                        src={league.away_team_logo}
                        style={{
                          width: "42px",
                          height: "42px",
                          objectFit: "cover",
                          borderRadius: "5px",
                        }}
                      />
                    </div>
                    <div>
                      <Typography style={{ fontSize: "14px" }} noWrap>
                        {league.away_team}
                      </Typography>{" "}
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "5px",
                  }}
                >
                  <Button
                    variant="contained"
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                      paddingLeft: "10px",
                      paddingRight: "10px",
                    }}
                  >
                    <div>1</div>
                    <div>10.6</div>
                  </Button>
                  <Button
                    variant="contained"
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                      paddingLeft: "10px",
                      paddingRight: "10px",
                    }}
                  >
                    <div>x</div>
                    <div>23.7</div>
                  </Button>
                  <Button
                    variant="contained"
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                      paddingLeft: "10px",
                      paddingRight: "10px",
                    }}
                  >
                    <div>2</div>
                    <div>8.4</div>
                  </Button>
                </div>
              </div>
            </Paper>
          </div>

  )
}

export default GameCard