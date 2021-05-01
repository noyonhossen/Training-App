
FROM mcr.microsoft.com/dotnet/core/aspnet:3.1-buster-slim AS base
WORKDIR /app

FROM mcr.microsoft.com/dotnet/core/sdk:3.1-buster AS build
WORKDIR /src
COPY ["Training.API/Training.API.csproj", "Training.API/"]
COPY ["Training.Data/Training.Data.csproj", "Training.Data/"]
COPY ["Training.Framework/Training.Framework.csproj", "Training.Framework/"]
RUN dotnet restore "Training.API/Training.API.csproj"
COPY . .
WORKDIR "/src/ETraining.API"
RUN dotnet build "Training.API.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "Training.API.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Training.API.dll"]