from django.shortcuts import render

def home(request):
    return render(request,"home.html")
def faculty(request):
    return render(request, "faculty.html")
def branch(request):
    return render(request, "branch.html")
def infrastructure(request):
    return render(request,"infrastrucre.html")
def committee(request):
    return render(request, "committee.html")
def workshop(request):
    return render(request,"workshop.html")
def aboutus(request):
    return render(request,"aboutus.html")
def classroom(request):
    return render(request,"classrooms.html")
