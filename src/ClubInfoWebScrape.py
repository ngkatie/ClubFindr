##Duck link club info
import time
from selenium import webdriver
from bs4 import BeautifulSoup
from selenium.webdriver.common.by import By
import csv

######################################
"""UPDATE FILE LOCATION ON LINE 61"""#
######################################

driver = webdriver.Chrome()
ducklink = 'https://stevens.campuslabs.com/engage/organizations'
driver.get(ducklink)
time.sleep(3)
# click load more
for i in range(19):
    clickable = driver.find_element(By.XPATH, '//*[@id="react-app"]/div/div/div/div[2]/div[3]/div/div[2]/div[2]/button')
    clickable.click()
    time.sleep(2)
page_source = driver.page_source
soup = BeautifulSoup(page_source,'html.parser')
driver.quit()

clubs_data = soup.find_all('div',style="font-size: 1.125rem; font-weight: 600; color: rgb(73, 73, 73); padding-left: 0.313rem; text-overflow: initial; margin-top: 0.313rem; overflow: initial; height: initial;")
x = len('<div style="font-size: 1.125rem; font-weight: 600; color: rgb(73, 73, 73); padding-left: 0.313rem; text-overflow: initial; margin-top: 0.313rem; overflow: initial; height: initial;">')
clubs = []
for i in range(len(clubs_data)):
    clubs.append(str(clubs_data[i]))

for i in range(len(clubs)):
    clubs[i] = clubs[i][x:-6]
#print(clubs)


descriptions_data = soup.find_all('p',class_="DescriptionExcerpt")
y = len('<p class="DescriptionExcerpt" style="font-size: 14px; line-height: 1.313rem; height: 2.813rem; margin: 0.938rem 0px 0px; color: rgba(0, 0, 0, 0.54); overflow: visible; text-overflow: initial; display: -webkit-box; -webkit-box-orient: vertical; padding-left: 0.313rem;">')
descriptions = []
for i in range(len(descriptions_data)):
    descriptions.append(str(descriptions_data[i]))

for i in range(len(descriptions)):
    descriptions[i] = descriptions[i][y:-4]
#print(descriptions)

pictures_data = soup.find_all('div',style="margin-left: 0px; padding: 15px 30px 11px 108px; position: relative; background-color: rgb(255, 255, 255); height: 100px; text-overflow: initial; overflow: visible;")

pictures = []
for i in range(len(pictures_data)):
    pictures.append(str(pictures_data[i]))

for i in range(len(pictures)):
    x = len('<div style="margin-left: 0px; padding: 15px 30px 11px 108px; position: relative; background-color: rgb(255, 255, 255); height: 100px; text-overflow: initial; overflow: visible;"><img alt="" size="75" src="')+len(clubs[i])-2
    y = len('sq" style="color: rgb(255, 255, 255); background-color: rgb(188, 188, 188); user-select: none; display: inline-flex; align-items: center; justify-content: center; font-size: 37.5px; border-radius: 50%; height: 75px; width: 75px; position: absolute; top: 9px; left: 13px; margin: 0.5rem; background-size: 55px;"/><div style="font-size: 1.125rem; font-weight: 600; color: rgb(73, 73, 73); padding-left: 0.313rem; text-overflow: initial; margin-top: 0.313rem; overflow: initial; height: initial;">  </div><p class="DescriptionExcerpt" style="font-size: 14px; line-height: 1.313rem; height: 2.813rem; margin: 0.938rem 0px 0px; color: rgba(0, 0, 0, 0.54); overflow: visible; text-overflow: initial; display: -webkit-box; -webkit-box-orient: vertical; padding-left:` 0.313rem;">')+len(descriptions[i])+len('</p></div>')+len(clubs[i])-5
    pictures[i] = pictures[i][x:-y]
    if(len(pictures[i])<30):
        pictures[i]=''

#print(pictures)

file = "/Users/zhack/Downloads/clubsdata.csv"
with open(file,"w",newline="") as csvfile:
    writer = csv.writer(csvfile)
    writer.writerow(["Club", "Description", "Picture"])
    for i in range(len(clubs)):
        writer.writerow([clubs[i], descriptions[i], pictures[i]])